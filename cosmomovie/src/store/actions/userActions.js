import {usersRequests} from "../../server/usersRequests";
import {userActionsTypes} from "./actionTypes";
import {moviesRequests} from "../../server/moviesRequests";
import {loadMovieList} from "./movieListActions";


function loginSuccess(user) {
    return {
        type: userActionsTypes.AUTHENTICATION_SUCCESS,
        userInfo: user,
    }
}

function authError(error) {
    return {
        type: userActionsTypes.AUTHENTICATION_ERROR,
       error,
    }
}

function signOut() {
    localStorage.clear();
    return {
        type: userActionsTypes.UNAUTHENTICATED
    };
}



/** Async actions **/

const signIn = (email, password) => dispatch => {

    return usersRequests.login(email, password)
        .then(user => {
            localStorage.setItem('token', user.token);
            dispatch(loginSuccess(user));
        })
        .catch(error => dispatch(authError(error.toString())));
};

const createUser = (user) => dispatch => {

    // return usersRequests.login(email, password)
    //     .then(user => {
    //         localStorage.setItem('token', user.token);
    //         dispatch(loginSuccess(user));
    //         history.push('/mymovies');
    //     })
    //     .catch(error => dispatch(authError(error)));
};

function addFriendSuccess(user) {
    return {
        type: userActionsTypes.ADD_FRIENDS_SUCCESS,
        user,
        friends:user.friends
    }
}

function addFriendError(error) {
    return {
        type: userActionsTypes.ADD_FRIENDS_ERROR,
        error,
    }
}




function addFriend(loggedUser, friend) {
    return dispatch => {
        const addedFriend = {...friend};
        const newFriend = {
            ...loggedUser,
            friends: [...loggedUser.friends, addedFriend]
        };

        return usersRequests.addToFriends(newFriend)
            .then(newUser => dispatch(addFriendSuccess(newUser)))
            .catch(error => dispatch(addFriendError(error)));
    }
}

function deleteFriend(user) {
    return {
        type: userActionsTypes.DELETE_FRIENDS,
        user,
        friends:user.friends
    }
}


function deleteFriendStatus(loggedUser, friend) {
    const id =friend._id;
    const removeFriend = {
        ...loggedUser,
        friends: [...loggedUser.friends.filter(friend => friend._id !== id)]
    };

    return (dispatch) => {
        return usersRequests
            .deleteFriend(removeFriend)
            .then(user => dispatch(deleteFriend(user)))

    }
}




export const userActions = {
    authError,
    signIn,
    signOut,
    addFriendSuccess,
    addFriendError,
    addFriend,
    deleteFriendStatus
};

