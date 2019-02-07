import React, {Component, Fragment} from 'react';
import CommentForm from "../commentForm/CommentForm";

import DetailsCardMovie from "../shared/DetailsCardMovie";
import PropTypes from "prop-types";
import {movieDetailsActions} from "../../store/actions/movieDetailActions";
import connect from "react-redux/es/connect/connect";
import {movieListActions} from "../../store/actions/movieListActions";
import Comment from "../singleComment/Comment";
import SmallUserCard from "../smallUserCard/SmallUserCard";



class SingleLargeMoviePage extends Component {

    componentDidMount() {
        this.props.loadCurrentMovie();
    }

    submit = (form) => {
        this.props.addComment(form.comment, this.props.loggedUser.image, this.props.loggedUser.name, this.props.movieDetails);
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

        console.log('movie', movie);

        if (!movie) {
            return (<div>Not FOUND</div>);
        }

        return (


            <Fragment>

                <DetailsCardMovie {...movie}
                                  onWatch={() => this.onWatch(movie)} />


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
    console.log('mapStateToProps', state);
    return {
        movieDetails: state.movieDetails,
        loggedUser:loggedUser,

    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadCurrentMovie() {
            const id = ownProps.match.params.id; // get id from router
            console.log('loadCurrentMovie', ownProps);
            dispatch(movieDetailsActions.loadMovieById(id));
        },
        toggleWatchedStatus: (movieDetails) => dispatch(movieListActions.toggleWatchedStatus(movieDetails)),

        addComment(comment, image, name ,movieDetails) {

            dispatch(movieDetailsActions.addNewComment(comment, image, name, movieDetails.movie ));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleLargeMoviePage);
