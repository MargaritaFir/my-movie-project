import {userActionsTypes} from "./actionTypes";
import {usersRequests} from "../../server/usersRequests";
import {friendsViewActionTypes} from "./actionTypes";

function currentUserStartLoading() {
    return {
        type: friendsViewActionTypes.CURRENT_USER_START_LOADING,
    }
}

function currentUserLoadingSuccess(user) {
    return {
        type: friendsViewActionTypes.CURRENT_USER_LOADING_SUCCESS ,
        user: user
    }
}

function currentUserLoadingFailed(error) {
    return {
        type: friendsViewActionTypes.CURRENT_USER_LOADING_FAILURE,
        error,
    }
}

export function loadUserById(id) {
    return (dispatch, getState) => {
        dispatch(currentUserStartLoading(true));
        return usersRequests.getUsersById(id, getState())
            .then(user => {
                dispatch(currentUserLoadingSuccess(user));
            })
            .catch(err => {
                dispatch(currentUserLoadingFailed(err));
            });
    };
}

export const friendsViewActions = {
    currentUserStartLoading,
    currentUserLoadingSuccess,
    currentUserLoadingFailed,
    loadUserById

}
