import React, {Component} from "react";
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import {connect} from 'react-redux';
//import {loadMovieListForSearch, movieBaseActions} from "../../store/actions/movieBaseAction";
import { loadMovieListForSearch, tmdbActions} from "../../store/actions/tmdbActions";
import SmallCardForSearch from "./SmallCardForSearch";
import FormSearch from '../filters/formAutocomplite/FormSearch'


class Search extends Component {


    componentDidMount() {
        this.props.loadMovieListForSearch();
    }



    render() {
        

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the movies</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (

            <>

                <div className="search-imdb">
                    <div className="search-imdb__wrapper">
                        <h1 className="search-imdb__title">СosmoMovies space collection</h1>
                        <FormSearch onInput ={(query) =>this.onInput(query)}/>
                    </div>
                </div>

                <div className="poster__row ">

                    { this.props.moviesBase.moviesBase.map((movie,i) => {
                        return <SmallCardForSearch  key={i} {...movie}/>
                    })}

                </div>
            </>
        )
    }
    onInput(query){
        if(query === ""){
            query = 'a';
            this.props.searchMovie(query)
        } else{
        this.props.searchMovie(query)
        }
    }
}




Search.propTypes = {
    loadMovieListForSearch: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        moviesBase: state.moviesBase,
        hasErrored: state.allMoviesHasErrored,
        isLoading: state.allMoviesIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        loadMovieListForSearch: () => dispatch(tmdbActions.loadMovieListForSearch()),
        searchMovie: (query) => dispatch(tmdbActions.loadQueryListMovie(query))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Search);
