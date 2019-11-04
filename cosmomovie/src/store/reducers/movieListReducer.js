import {movieListActionType} from "../actions/movieListActions";
import {movieDetailsActionType} from "../actions/movieDetailActions";

export function moviesHasErrored(state = false, action) {
    switch (action.type) {
        case movieListActionType.MOVIES_HAS_ERRORED:
            return action.hasErrored;

        default:
            return state;

    }

}

export function moviesIsLoading(state = false, action) {
    switch (action.type) {
        case movieListActionType.MOVIES_IS_LOADING :
            return action.isLoading;

        default:
            return state;
    }
}

export function movies(state = [], action) {
    switch (action.type) {
        case movieListActionType.MOVIES_FETCH_DATA_SUCCESS :
            return action.movies;
        case movieDetailsActionType.ADD_COMMENT : // update the movie in the list when add comment
        case movieListActionType.UPDATE_MOVIE : {
            const movie = action.movie;
            const id = action.movie._id;
            return state.map(m => m._id === id ? movie : m);
        }

        case movieListActionType.DELETE_MOVIE : {
            const id = action.movie._id;
            console.log(action.movie)
            return state.filter(m => m._id !== id);
        }

        case movieListActionType.ADD_NEW_MOVIE : {

            return Object.assign([], state, action.movie);

        }


        default:
            return state;
    }
}
