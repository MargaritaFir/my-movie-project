import {usersRequests} from "../../server/usersRequests";
import {userActionsTypes} from "./actionTypes";



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
function createNewUser(user){
    return {
        type: userActionsTypes.CREATE_NEW_USER,
        userInfo: user
    }
}

function errorCreateUser(errorCreate){
    return {
        type: userActionsTypes.ERROR_CREATE_USER,
        errorCreate
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

const createUser = (name, NickName, email, password) => {
    const imageArr = ['https://yt3.ggpht.com/a/AGF-l7_D-O7WCG23AXXrKOy28M0_6EYT1-EB-iEBWA=s900-c-k-c0xffffffff-no-rj-mo', 'https://yt3.ggpht.com/a/AGF-l79_KdQQblrsoui8KQYbFZfGaPCIHT6PKs6uPw=s900-mo-c-c0xffffffff-rj-k-no', 'https://mir-s3-cdn-cf.behance.net/projects/max_808/17462091.548c7e0d2ea46.png','https://off-cs.ru/upload/2018/06/12281530060106.jpg', 'https://avatars.mds.yandex.net/get-pdb/1553131/d0748d0c-c8af-4d53-bf5c-d1b8042331a6/s1200']
    const rand = Math.floor(Math.random()* imageArr.length)
        const newUser = {
            _id: 6,
            name: name,
            NickName: NickName,
            image: imageArr[rand],
            email: email,
            password: password,
            friends: []
        };
        console.log(newUser);

        return (dispatch) => {
            return usersRequests.createNewUser(newUser)
                                .then(user => dispatch(createNewUser(user)))
                               // .then(({email, password}) => dispatch(signIn(email, password)))
                              //  .then(user => dispatch(loginSuccess(user)))
                                .catch((error) => dispatch(errorCreateUser(error.toString())))
        }
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
    deleteFriendStatus,
    createUser
};

