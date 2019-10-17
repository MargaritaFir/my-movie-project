import {combineReducers} from 'redux';
import {movies, moviesHasErrored, moviesIsLoading} from "./movieListReducer";
import {users, usersHasErrored, usersIsLoading} from "./usersSelectReducer";
import {movieDetailsReducer} from "./movieDetailsReducer";
import {reducer as formReducer } from 'redux-form';
//import {allMoviesHasErrored, allMoviesIsLoading, moviesBase} from "./movieBaseReducer"
import {moviesBase} from "./tmdbReducer"
import {userReducer} from "./userReducer";
import {friendsViewReducer} from "./friendsViewReducer";

export const rootReducer = combineReducers({
    movies,
    moviesHasErrored,
    moviesIsLoading,
    users,
    usersHasErrored,
    usersIsLoading,
    movieDetails: movieDetailsReducer,
    form: formReducer,
    user: userReducer,
    currentUser:friendsViewReducer,
    moviesBase:moviesBase

});

