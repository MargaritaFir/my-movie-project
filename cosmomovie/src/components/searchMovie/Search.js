import React, {Component} from "react";
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import {connect} from 'react-redux';
//import {loadMovieListForSearch, movieBaseActions} from "../../store/actions/movieBaseAction";
import { loadMovieListForSearch, tmdbActions} from "../../store/actions/tmdbActions";
import SmallCardForSearch from "./SmallCardForSearch";


class Search extends Component {

    componentDidMount() {
        this.props.loadMovieListForSearch();
    }

    render() {

        console.log(this.props)

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

                    </div>
                </div>

                <div className="poster__row ">

                    { this.props.moviesBase.map((movie,i) => {
                        return <SmallCardForSearch  key={i} {...movie}/>
                    })}

                </div>
            </>
        )
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
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Search);
