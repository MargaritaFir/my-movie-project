import {movieListActionType} from "../store/actions/movieListActions";

const paths = {
    movies: '/api/movies',
    movieBase: '/api/movieBase'
};

function getBaseMovies() {
    return fetch(paths.movieBase)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
}

function getMovieFromBasesById(id) {
    return fetch(`${paths.movieBase}/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
}



export const baseMoviesRequests = {
    getBaseMovies,
    getMovieFromBasesById,
};




