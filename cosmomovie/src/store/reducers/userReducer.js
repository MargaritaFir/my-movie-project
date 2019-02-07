import {userActionsTypes} from "../actions/actionTypes";

const initialState = {
    authenticated: false,
    userInfo: {
        _id: 0,
        login: '',
        email: '',
        password: '',
        name: '',
        image: '',
        friends: [],
        token: '',
    },
    isAuthFailed: false,
    authFailureError: '',
};

export function userReducer(state = initialState, action) {
    console.log(state, action, userActionsTypes);
    switch (action.type) {
        case userActionsTypes.AUTHENTICATION_SUCCESS:
            return {
                ...state,
                authenticated: true,
                userInfo: action.userInfo,
                isAuthFailed: false,
                authFailureError: '',
            };

        case userActionsTypes.AUTHENTICATION_ERROR:
            return {
                ...state,
                isAuthFailed: true,
                authFailureError: action.error,
            };

        case userActionsTypes.UNAUTHENTICATED:
            return {
                ...state,
                authenticated: false,
            };
        case userActionsTypes.ADD_FRIENDS_SUCCESS:
        return {
            ...state,
            userInfo: {
                ...state.userInfo,
                friends: [...action.friends]

            }
        };

        case userActionsTypes.DELETE_FRIENDS:
            const id = action.friends._id;
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    friends: [...action.friends]

                }
            };

        case userActionsTypes.ADD_FRIENDS_ERROR: {
            return {
                ...state,
                errorFriend: action.error
            }
        }
        default:
            return state;
    }
}
