const paths = {
    users: '/api/users',
};

function getAllUsers() {
    return fetch(paths.users)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
}


function getUsersById(id) {

    return fetch(`${paths.users}/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
}

function login(email, password) {
    return getAllUsers()
        .then(response => response.find(user => user.email === email && user.password === password ))
        .then(user => {
            if (!user) {
                throw new Error('User was not found');
            }
            user.token = Math.random().toString(36).substring(5);
            return user;
        })
}

function loginRequest(user) {
    const id = user._id;

    const headers = new Headers();
    headers.append("Content-Type", "application/json; charset=utf-8");
    const init = {
        method: 'GET',
        headers,
        body: JSON.stringify(user),
    };

    return fetch(`${paths.users}/${id}`, init)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
}

function singnIn(newUser){
    const headers = new Headers();
    headers.append("Content-Type", "application/json; charset=utf-8");
    const init = {
        method: 'POST',
        headers,
        body: JSON.stringify(newUser)     
    };

    
    console.log(init);

    return fetch(`${paths.users}`, init)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
}


function createNewUser(newUser){
    return getAllUsers()
    .then(response => {
        if (!response.find(user => user.email === newUser.email )){
            console.log(newUser)
            return newUser
        } else {
            throw new Error('User is exist');
        }
    })
    .then(user => singnIn(user))  
}

export function addToFriends(user) {
    const id = user._id;

    const headers = new Headers();
    headers.append("Content-Type", "application/json; charset=utf-8");
    const init = {
        method: 'PUT',
        headers,
        body: JSON.stringify(user),
    };

    return fetch(`${paths.users}/${id}`, init)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
}


function deleteFriend(user) {
    const id = user._id;

    const headers = new Headers();
    headers.append("Content-Type", "application/json; charset=utf-8");
    const init = {
        method: 'PUT',
        headers,
        body: JSON.stringify(user),
    };

    return fetch(`${paths.users}/${id}`, init)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
}



export const usersRequests = {
    getAllUsers,
    getUsersById,
    login,
    loginRequest,
    addToFriends,
    deleteFriend,
    createNewUser
};
