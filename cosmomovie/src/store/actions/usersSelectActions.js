import {usersRequests} from "../../server/usersRequests";


export const usersSelectActionType = {
    USERS_HAS_ERRORED: 'USERS_HAS_ERRORED',
    USERS_IS_LOADING: 'USERS_IS_LOADING',
    USERS_FETCH_DATA_SUCCESS: 'USERS_FETCH_DATA_SUCCESS',

};
function usersHasErrored(bool) {
    return {
        type: usersSelectActionType.USERS_HAS_ERRORED,
        hasErrored: bool
    };
}

 function usersIsLoading(bool) {
    return {
        type: usersSelectActionType.USERS_IS_LOADING,
        isLoading: bool
    };
}

 function usersFetchDataSuccess(users) {
    return {
        type: usersSelectActionType.USERS_FETCH_DATA_SUCCESS,
        users
    };

}


export function loadUsersSelect() {
    return (dispatch) => {
        console.log('loadUsersSelect');
        dispatch(usersIsLoading(true));

        return usersRequests.getAllUsers()

            .then((items) => {
                dispatch(usersIsLoading(false));
                dispatch(usersFetchDataSuccess(items));
            })
            .catch(() => {
                dispatch(usersIsLoading(false));
                dispatch(usersHasErrored(true));
            });
    };
}


export const usersSelectActions = {
    usersHasErrored,
    usersIsLoading,
    usersFetchDataSuccess,
    loadUsersSelect,
};
