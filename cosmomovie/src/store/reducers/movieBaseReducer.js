import {allMovieListActionType} from "../actions/movieBaseAction";

export function allMoviesHasErrored(state = false, action) {
    switch (action.type) {
        case allMovieListActionType.ALL_MOVIES_HAS_ERRORED:
            return  action.hasErrored;

        default:
            return state;

    }

}

export function allMoviesIsLoading(state = false, action) {
    switch (action.type) {
        case allMovieListActionType.ALL_MOVIES_IS_LOADING :
            return action.isLoading;

        default:
            return state;
    }
}

export function moviesBase(state = [], action) {
    switch (action.type) {
        case allMovieListActionType.ALL_MOVIES_FETCH_DATA_SUCCESS :
            return action. moviesBase;


        default:
            return state;
    }
}
