import {tmdbRequests} from "../../server/tmdbRequests";

export const tmdbActionType = {
    ALL_MOVIES_HAS_ERRORED: 'ALL_MOVIES_HAS_ERRORED',
    ALL_MOVIES_IS_LOADING: 'ALL_MOVIES_IS_LOADING',
    ALL_MOVIES_FETCH_DATA_SUCCESS: 'ALL_MOVIES_FETCH_DATA_SUCCESS',
    LOAD_QUERY_MOVIES: 'LOAD_QUERY_MOVIES',
    UPDATE_QUERY: 'UPDATE_QUERY'


};

export function allMoviesHasErrored(bool) {
    return {
        type: tmdbActionType.ALL_MOVIES_HAS_ERRORED,
        hasErrored: bool
    };
}

export function allMoviesIsLoading(bool) {
    return {
        type: tmdbActionType.ALL_MOVIES_IS_LOADING,
        isLoading: bool
    };
}

export function updateQuery(query){
    return {
        type: tmdbActionType.UPDATE_QUERY,
        query
    }
}

export function allMoviesFetchDataSuccess(moviesBase) {
    return {
        type: tmdbActionType.ALL_MOVIES_FETCH_DATA_SUCCESS,
        moviesBase
    };
}

export function loadQueryMoviesTMDB(moviesBase){
    return{
        type: tmdbActionType.LOAD_QUERY_MOVIES,
        moviesBase
    }
}




export function loadMovieListForSearch() {
    return (dispatch) => {
        console.log('loadMovieList');
        dispatch(allMoviesIsLoading(true));

        return tmdbRequests.getPopularMovies()
            .then((items) => {
                dispatch(allMoviesIsLoading(false));
                
                dispatch(allMoviesFetchDataSuccess(items));
            })
            .catch(() => {
                dispatch(allMoviesIsLoading(false));
                dispatch(allMoviesHasErrored(true));
            });
    };
}

export function loadQueryListMovie(query) {
    return (dispatch) => {
        console.log('loadMovieList');
        dispatch(allMoviesIsLoading(true));
        dispatch(updateQuery(query))


        return tmdbRequests.searchMovie(query)
            .then((items) => {
                dispatch(allMoviesIsLoading(false));
                dispatch(loadQueryMoviesTMDB(items));
            })
            .catch(() => {
                dispatch(allMoviesIsLoading(false));
                dispatch(allMoviesHasErrored(true));
            });
    };
}



export const tmdbActions = {
    allMoviesHasErrored,
    allMoviesIsLoading,
    allMoviesFetchDataSuccess,
    loadMovieListForSearch,
    loadQueryListMovie
};
