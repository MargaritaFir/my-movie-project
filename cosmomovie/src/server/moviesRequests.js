
const paths = {
    movies: '/api/movies',
};

function getAllMovies() {
    return fetch(paths.movies)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
}

function getMoviesById(id) {
    // const movie = state.movies.find(m => m._id.toString() === id.toString());
    // return movie ? Promise.resolve(movie) : Promise.reject(`No movie with id ${id}`);
    return fetch(`${paths.movies}/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
}

function addNewMovie(movie) {

    const headers = new Headers();
    headers.append("Content-Type", "application/json; charset=utf-8");
    const init = {
        method: 'POST',
        headers,
        body: JSON.stringify(movie),
    };

    return fetch(`${paths.movies}`, init)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
}

function updateMovie(movie) {
    const id = movie._id;

    const headers = new Headers();
    headers.append("Content-Type", "application/json; charset=utf-8");
    const init = {
        method: 'PUT',
        headers,
        body: JSON.stringify(movie),
    };

    return fetch(`${paths.movies}/${id}`, init)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
}

function deleteMovie(movie) {
    const id = movie._id;

    const headers = new Headers();
    headers.append("Content-Type", "application/json; charset=utf-8");
    const init = {
        method: 'DELETE',
        headers,
        body: JSON.stringify(movie),
    };

    return fetch(`${paths.movies}/${id}`, init)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
}

export const moviesRequests = {
    getAllMovies,
    getMoviesById,
    updateMovie,
    deleteMovie,
    addNewMovie
};
