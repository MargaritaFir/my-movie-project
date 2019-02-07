import { baseMoviesRequests} from "../../server/movieBaseRequests";
import {movieListActionType} from "./movieListActions";

export const allMovieListActionType = {
    ALL_MOVIES_HAS_ERRORED: 'ALL_MOVIES_HAS_ERRORED',
    ALL_MOVIES_IS_LOADING: 'ALL_MOVIES_IS_LOADING',
    ALL_MOVIES_FETCH_DATA_SUCCESS: 'ALL_MOVIES_FETCH_DATA_SUCCESS',


};


export function allMoviesHasErrored(bool) {
    return {
        type: allMovieListActionType.ALL_MOVIES_HAS_ERRORED,
        hasErrored: bool
    };
}

export function allMoviesIsLoading(bool) {
    return {
        type: allMovieListActionType.ALL_MOVIES_IS_LOADING,
        isLoading: bool
    };
}

export function allMoviesFetchDataSuccess(moviesBase) {
    return {
        type: allMovieListActionType.ALL_MOVIES_FETCH_DATA_SUCCESS,
        moviesBase
    };
}




export function loadMovieListForSearch() {
    return (dispatch) => {
        console.log('loadMovieList');
        dispatch(allMoviesIsLoading(true));

        return baseMoviesRequests.getBaseMovies()
            .then((items) => {
                dispatch(allMoviesIsLoading(false));
                dispatch(allMoviesFetchDataSuccess(items));
            })
            .catch(() => {
                dispatch(allMoviesIsLoading(false));
                dispatch(allMoviesHasErrored(true));
            });
    };
}

export const movieBaseActions = {
    allMoviesHasErrored,
    allMoviesIsLoading,
    allMoviesFetchDataSuccess,
    loadMovieListForSearch,
};
