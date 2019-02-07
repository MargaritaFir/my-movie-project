import {movieDetailsActionType} from "../actions/movieDetailActions";

const initialState = {
    movie: null,
    isLoading: false,
    hasError: false,
    errorReason: '',
};

export function movieDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case movieDetailsActionType.MOVIE_DETAILS_START_LOADING :
            return {
                ...state,
                isLoading: true,
                hasError: false,
            };

        case movieDetailsActionType.MOVIE_DETAILS_LOADING_SUCCESS :
            return {
                ...state,
                isLoading: false,
                movie: action.movie,
            };

        case movieDetailsActionType.MOVIE_DETAILS_LOADING_FAILURE :
            return {
                ...state,
                isLoading: false,
                hasError: true,
                errorReason: action.error,
            };

        case movieDetailsActionType.ADD_COMMENT :

            return {
                ...state,
                 movie: action.movie,
            };


        default:
            return state;
    }
}


