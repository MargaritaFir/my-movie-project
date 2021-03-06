function getPopularMovies(){
    const url =`https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716`;

    return fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    })
    .then((response) => response.json())
}

function searchMovie(query){
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`;
    
    return fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    })
    .then((response) => response.json())
}

function getMovieByQuery(query) {
    if(query !=="" || null||undefined){
        return fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
    } else {
        return getPopularMovies()
    }
    

} 

// function getMovieByQuery(query) {
//     return fetch(`http://www.omdbapi.com/?t=${query}&apikey=7694ce07`)
//         .then((response) => {
//             if (!response.ok) {
//                 throw Error(response.statusText);
//             }
//             return response;
//         })
//         .then((response) => response.json())
// } 
export const tmdbRequests ={
    getPopularMovies, 
    searchMovie,
    getMovieByQuery
}