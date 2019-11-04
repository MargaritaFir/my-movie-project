import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import {connect} from 'react-redux';
import { movieListActions} from "../../../store/actions/movieListActions";
import MovieRowTable from './singleRowMovie/MovieRowTable';


class TableViewMovies extends Component {

    componentDidMount() {
        this.props.loadMovieList();
    }

    render() {

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the movies</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div id="profile__movies">
                <table className="table-for-movies">
                    <tbody>
                    {this.props.userMovies.map((movie, i) => {
                        return <MovieRowTable {...movie}
                                              release_date={this.changeFormatDate(movie.release_date)}
                                              key={i}
                                              onWatch={() => this.onWatch(movie)}
                                              onDelete={() => this.onDelete(movie)}
                        />
                    })}
                    </tbody>
                </table>
            </div>
        );
    }

    onWatch(movie) {
        this.props.toggleWatchedStatus(movie);
    }
    
    onDelete(movie) {
        this.props.toggleDeleteStatus(movie);
    }

    changeFormatDate(data){
        const arrMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'  ]
        const currentData = data.split('-'),
            year = currentData[0],
            month = parseInt(currentData[1]),
            day = parseInt(currentData[2]);

            return `${day} ${arrMonth[month-1]} ${year}`

    }

}


TableViewMovies.propTypes = {
    loadMovieList: PropTypes.func.isRequired,
    toggleWatchedStatus: PropTypes.func.isRequired,
    toggleDeleteStatus: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired,
    userMovies: PropTypes.array.isRequired,
    loggedUser: PropTypes.object.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    const loggedUser = state.user.userInfo;
    return {
        movies: state.movies,
        userMovies:  state.movies.filter(movie => movie.userId === loggedUser._id),
        loggedUser: loggedUser,
        hasErrored: state.moviesHasErrored,
        isLoading: state.moviesIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadMovieList: () => dispatch(movieListActions.loadMovieList()),
        toggleWatchedStatus: (movie) => dispatch(movieListActions.toggleWatchedStatus(movie)),
        toggleDeleteStatus: (movie) => dispatch(movieListActions.toggleDeleteStatus(movie)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableViewMovies);
