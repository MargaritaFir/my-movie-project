import {friendsViewActionTypes} from "../actions/actionTypes";

const initialState = {
    user:{
        _id: 0,
        login: '',
        email: '',
        name: '',
        image: '',
        friends: [],
    },
    isLoading: false,
    hasError: false,
    errorReason: '',
};

export function friendsViewReducer(state = initialState, action) {
    switch (action.type) {
        case friendsViewActionTypes.CURRENT_USER_START_LOADING :
            return {
                ...state,
                isLoading: true,
                hasError: false,
            };

        case friendsViewActionTypes.CURRENT_USER_LOADING_SUCCESS :
            return {
                ...state,
                isLoading: false,
                user: action.user,
            };

        case friendsViewActionTypes.CURRENT_USER_LOADING_FAILURE :
            return {
                ...state,
                isLoading: false,
                hasError: true,
                errorReason: action.error,
            };


        default:
            return state;
    }
}
