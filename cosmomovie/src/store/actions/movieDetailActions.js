import {moviesRequests} from "../../server/moviesRequests";
import {baseMoviesRequests} from "../../server/movieBaseRequests";
import {tmdbRequests} from "../../server/tmdbRequests";


export const movieDetailsActionType = {
    MOVIE_DETAILS_START_LOADING: 'MOVIE_DETAILS_START_LOADING',
    MOVIE_DETAILS_LOADING_SUCCESS: 'MOVIE_DETAILS_LOADING_SUCCESS',
    MOVIE_DETAILS_LOADING_FAILURE: 'MOVIE_DETAILS_LOADING_FAILURE',
    ADD_NEW_MOVIE: 'ADD_NEW_MOVIE',
    ADD_COMMENT: 'ADD_COMMENT',
    MOVIE_DETAILS_LOADING_SUCCESS_TMDB: 'MOVIE_DETAILS_LOADING_SUCCESS_TMDB'
};

function movieDetailsStartLoading() {
    return {
        type: movieDetailsActionType.MOVIE_DETAILS_START_LOADING,
    }
}

function movieDetailsLoadingSuccess(movie) {
    return {
        type: movieDetailsActionType.MOVIE_DETAILS_LOADING_SUCCESS,
        movie: movie
    }
}

function movieDetailsLoadingSuccessTMDB(movie) {
    return {
        type: movieDetailsActionType.MOVIE_DETAILS_LOADING_SUCCESS_TMDB,
        movie: movie.results[0]
    }
}

function movieDetailsLoadingFailed(error) {
    return {
        type: movieDetailsActionType.MOVIE_DETAILS_LOADING_FAILURE,
        error,
    }
}

function addComment(movie) {
    return {
        type: movieDetailsActionType.ADD_COMMENT,
        movie,


    }
}



function addNewComment(comment, image, name, movie) {
        const newComment ={ image, name,comment};
        const addedComment = {
            ...movie,
            comments: [  newComment, ...(movie.comments || [])],
        };
        console.log(addedComment);
        return (dispatch) =>
            moviesRequests
                .updateMovie(addedComment)
                .then(savedMovie => dispatch(addComment(savedMovie)));

}


function loadMovieById(id) {
    return (dispatch, getState) => {
        dispatch(movieDetailsStartLoading(true));
        return moviesRequests.getMoviesById(id, getState())
            .then(movieDetails => {
                dispatch(movieDetailsLoadingSuccess(movieDetails));
            })
            .catch(err => {
                dispatch(movieDetailsLoadingFailed(err));
            });
    };
}

function loadMovieFromBaseById(id) {
    return (dispatch, getState) => {
        dispatch(movieDetailsStartLoading(true));
        return baseMoviesRequests.getMovieFromBasesById(id, getState())
            .then(movieDetails => {
                dispatch(movieDetailsLoadingSuccess(movieDetails));
            })
            .catch(err => {
                dispatch(movieDetailsLoadingFailed(err));
            });
    };
}


function loadMovieByIdAndQuery(id) {
    return (dispatch, getState) => {
        dispatch(movieDetailsStartLoading(true));
        return tmdbRequests.getMovieByQuery(id, getState())
            .then(movieDetails => {
                dispatch(movieDetailsLoadingSuccessTMDB(movieDetails));
            })
            .catch(err => {
                dispatch(movieDetailsLoadingFailed(err));
            });
    };
}
export const movieDetailsActions = {
    loadMovieById,
    movieDetailsStartLoading,
    movieDetailsLoadingSuccess,
    movieDetailsLoadingFailed,
    loadMovieFromBaseById,
    addNewComment,
    loadMovieByIdAndQuery,
    movieDetailsLoadingSuccessTMDB
};
