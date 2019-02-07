import {usersSelectActionType} from "../actions/usersSelectActions";



export function usersHasErrored(state = false, action) {
    switch (action.type) {
        case usersSelectActionType.USERS_HAS_ERRORED:
            return action.hasErrored;

        default:
            return state;

    }

}

export function usersIsLoading(state = false, action) {
    switch (action.type) {
        case usersSelectActionType.USERS_IS_LOADING :
            return action.isLoading;
        default:
            return state;
    }
}

export function users(state =[], action) {
    switch (action.type) {
        case usersSelectActionType.USERS_FETCH_DATA_SUCCESS :
            return action.users;


        default:
            return state;
    }
}
