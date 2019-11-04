import {moviesRequests} from "../../server/moviesRequests";


export const movieListActionType = {
    MOVIES_HAS_ERRORED: 'MOVIES_HAS_ERRORED',
    MOVIES_IS_LOADING: 'MOVIES_IS_LOADING',
    MOVIES_FETCH_DATA_SUCCESS: 'MOVIES_FETCH_DATA_SUCCESS',

    UPDATE_MOVIE: 'UPDATE_MOVIE',
    DELETE_MOVIE: 'DELETE_MOVIE',
    ADD_NEW_MOVIE:'ADD_NEW_MOVIE',
};


export function moviesHasErrored(bool) {
    return {
        type: movieListActionType.MOVIES_HAS_ERRORED,
        hasErrored: bool
    };
}

export function moviesIsLoading(bool) {
    return {
        type: movieListActionType.MOVIES_IS_LOADING,
        isLoading: bool
    };
}

export function moviesFetchDataSuccess(movies) {
    return {
        type: movieListActionType.MOVIES_FETCH_DATA_SUCCESS,
        movies
    };
}


function updateMovie(movie) {
    return {
        type: movieListActionType.UPDATE_MOVIE,
        movie,
    };
}

function deleteMovie(movie) {
    return {
        type: movieListActionType.DELETE_MOVIE,
        movie,
    };
}

function addNewMovie(movie) {
    return {
        type: movieListActionType.ADD_NEW_MOVIE,
         movie,


    };
}

function addNewMovieList(movie, userId) {
    const addMovie = {
        title: movie.title,
        //Year: movie.Year,
        release_date: movie.release_date,
        //Runtime: movie.Runtime,
        overview: movie.overview,
        poster_path: movie.poster_path,
        //Genre: movie.Genre,
        //Actors: movie.Actors,
        vote_average: movie.vote_average,
        isAdded: !movie.isAdded,
        isWatched: false,
        userId: userId,
        comments: [],
    };

    return (dispatch) => {
        return moviesRequests
            .addNewMovie(addMovie)
            .then(movie => dispatch(addNewMovie(movie)));
    }
}





function toggleWatchedStatus(movie) {
    const changedMovie =  {
        ...movie,
        isWatched: !movie.isWatched,
    };

    return (dispatch) => {
        return moviesRequests
            .updateMovie(changedMovie)
            .then(savedMovie => dispatch(updateMovie(savedMovie)));
    }
}

function toggleDeleteStatus(movie) {
    const removeMovie =  {
        ...movie
    };

    return (dispatch) => {
        return moviesRequests
            .deleteMovie(removeMovie)
            .then(() => dispatch(deleteMovie(movie)))
    }
}

export function loadMovieList() {
    return (dispatch) => {
        console.log('loadMovieList');
        dispatch(moviesIsLoading(true));

        return moviesRequests.getAllMovies()
            .then((items) => {
                dispatch(moviesIsLoading(false));
                dispatch(moviesFetchDataSuccess(items));
            })
            .catch(() => {
                dispatch(moviesIsLoading(false));
                dispatch(moviesHasErrored(true));
            });
    };
}

export const movieListActions = {
    moviesHasErrored,
    moviesIsLoading,
    moviesFetchDataSuccess,
    loadMovieList,
    toggleWatchedStatus,
    toggleDeleteStatus,
    addNewMovieList,

};
