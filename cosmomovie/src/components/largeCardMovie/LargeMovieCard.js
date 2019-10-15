import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {movieDetailsActions} from "../../store/actions/movieDetailActions";
import DetailsCardMovie from "../shared/DetailsCardMovie";
import {movieListActions} from "../../store/actions/movieListActions";

class LargeMovieCard extends Component {

    componentDidMount() {
        this.props.loadCurrentMovie();

    }


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
            return (<div>...</div>);
        }

            console.log(this.props.movieDetails.movie[0])

        return (
            <div>

                <DetailsCardMovie {...this.props.movieDetails.movie.results[0]}
                                  onWatch={() => this.onWatch(movie)}
                                  onAdd={() => this.onAdd(movie, this.props.userId)}
                />
            </div>
        );
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

    onWatch(movie) {
        console.log('onWatch', movie);
        this.props.toggleWatchedStatus(movie);
    }

    onAdd(movie, userId) {
        console.log('onAdd', movie);
        this.props.addNewMovieList(movie, userId);
    }


}

LargeMovieCard.propTypes = {
    loadCurrentMovie: PropTypes.func.isRequired,
    movieDetails: PropTypes.array.isRequired,
    userId: PropTypes.string.isRequired,
    userInfo: PropTypes.object.isRequired,
    toggleWatchedStatus: PropTypes.func.isRequired,
    addNewMovieList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    console.log('mapStateToProps', state);
    return {
        userId: state.user.userInfo._id,
        movieDetails: state.movieDetails,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadCurrentMovie() {
            const id = ownProps.match.params.id; // get id from router
            console.log('loadCurrentMovie', ownProps);
            dispatch(movieDetailsActions.loadMovieByIdAndQuery(id));
            //dispatch(movieDetailsActions.loadMovieFromBaseById(id));
        },
        toggleWatchedStatus: (movieDetails) => dispatch(movieListActions.toggleWatchedStatus(movieDetails)),
        addNewMovieList: (movieDetails, userId) => dispatch(movieListActions.addNewMovieList(movieDetails, userId)),
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(LargeMovieCard);

