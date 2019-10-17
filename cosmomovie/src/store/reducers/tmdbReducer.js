import {tmdbActionType} from "../actions/tmdbActions";

const initialState = {
    moviesBase: [],
    query: '',
    isLoading: true,
    hasError: false
};



export function moviesBase(state = initialState, action) {
    console.log(initialState,action)
    switch (action.type) {
        case tmdbActionType.ALL_MOVIES_HAS_ERRORED:
                return  action.hasErrored;
        case tmdbActionType.ALL_MOVIES_IS_LOADING :
                return {
                    ...state,
                    isLoading: true,
                    hasError: false,
                    query: ''
                };
        case tmdbActionType.ALL_MOVIES_FETCH_DATA_SUCCESS :
                return {
                    ...state,
                  isLoading: false,
                  moviesBase: [...action.moviesBase.results]
                };

        case tmdbActionType.UPDATE_QUERY:
            return{
                ...state,
                query:action.query
                
            }

        case tmdbActionType.LOAD_QUERY_MOVIES:

            return {
                ...state,
              isLoading: false,
              moviesBase: [...action.moviesBase.results.filter((movie) => movie.poster_path && movie.vote_average !==0)]
            };
        
        


        default:
            return state;
    }
}
