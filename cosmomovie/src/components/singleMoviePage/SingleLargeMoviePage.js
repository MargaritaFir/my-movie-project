import React, {Component, Fragment} from 'react';
import CommentForm from "../commentForm/CommentForm";
import DetailsCardMovie from "../shared/DetailsCardMovie";
import PropTypes from "prop-types";
import {movieDetailsActions} from "../../store/actions/movieDetailActions";
import connect from "react-redux/es/connect/connect";
import {movieListActions} from "../../store/actions/movieListActions";
import Comment from "../singleComment/Comment";




class SingleLargeMoviePage extends Component {

    componentDidMount() {
        this.props.loadCurrentMovie();
    }

    submit = (form) => {
        if(form.comment!=="" && form.comment!== undefined ){
            this.props.addComment(form.comment, this.props.loggedUser.image, this.props.loggedUser.name, this.props.movieDetails, this.props.loggedUser._id, this.formatDate());
        }
      
    };


    render() {

        return this.isLoading() ? this.showLoading() :
            this.hasError() ? this.showError() : this.displayCard();
    }

    hasError() {
        return this.props.movieDetails.hasError;
    }

    isLoading() {
        return this.props.movieDetails.isLoading;
    }

    displayCard() {
        const movie = this.props.movieDetails.movie;



        if (!movie) {
            return (<div>Not FOUND</div>);
        }

        return (


            <Fragment>

                <DetailsCardMovie {...movie}
                                  onWatch={() => this.onWatch(movie)} 
                                />


                <div className="movie-comments">

                    <div className="movie-comments__header">Comments</div>

                    <CommentForm  onSubmit={this.submit}/>

                    {(this.props.movieDetails.movie.comments || []).map((comment) => {

                        return <Comment

                            {...comment}


                        />
                    })}

                </div>

            </Fragment>

        )

    }

    showError() {
        return (
            <div className="big-movieCard">Error: {this.props.movieDetails.errorReason}</div>
        )
    }

    showLoading() {
        return (
            <div className="big-movieCard">Loading ...</div>
        );
    }

    onWatch(movieDetails) {
        console.log('onWatch', movieDetails);
        this.props.toggleWatchedStatus(movieDetails);
    }

    formatDate() {

        const date = new Date()
        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;
        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
        let yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy; 
        return dd + '.' + mm + '.' + yy;
      }

}


SingleLargeMoviePage.propTypes = {
    loadCurrentMovie: PropTypes.func.isRequired,
    movieDetails: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
    toggleWatchedStatus: PropTypes.func.isRequired,
    loggedUser:PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    const loggedUser = state.user.userInfo;

    return {
        movieDetails: state.movieDetails,
        loggedUser:loggedUser,

    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadCurrentMovie() {
            const id = ownProps.match.params.id; // get id from router
            
            dispatch(movieDetailsActions.loadMovieById(id));
        },
        toggleWatchedStatus: (movieDetails) => dispatch(movieListActions.toggleWatchedStatus(movieDetails)),

        addComment(comment, image, name ,movieDetails, userId, commentDate) {

            dispatch(movieDetailsActions.addNewComment(comment, image, name, movieDetails.movie, userId, commentDate ));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleLargeMoviePage);
