import React, { Component} from 'react';
import PropTypes from 'prop-types';
import MovieCard from './singleMovieCard/MovieCard';
import 'whatwg-fetch';
import { connect } from 'react-redux';
import {loadMovieList, movieListActions} from "../../../store/actions/movieListActions";




class CardViewMovies extends Component {

    componentDidMount() {
        this.props.fetchData();
    }


    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (

            <div className="poster__row ">

                {this.props.userMovies.map((movie, i) => {
                    return <MovieCard {...movie}
                                      key={i}/>
                })}

            </div>


        )
    }
}


CardViewMovies.propTypes ={
    fetchData: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    loggedUser: PropTypes.object.isRequired,
    userMovies: PropTypes.array.isRequired,
};

const mapStateToProps = (state) =>{
    const loggedUser = state.user.userInfo;
    return{
        userMovies: state.movies.filter(movie => movie.userId === loggedUser._id),
        movies:  state.movies,
        loggedUser: loggedUser,
        hasErrored: state.moviesHasErrored,
        isLoading: state.moviesIsLoading,

    };

};

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchData: () => dispatch(loadMovieList())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CardViewMovies);
