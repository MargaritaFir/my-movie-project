import React, {Component, Fragment} from 'react';
import HeaderProfile from "../headerProfile/HeaderProfile";
import {Redirect} from "react-router";
import connect from "react-redux/es/connect/connect";

import {friendsViewActions} from "../../store/actions/friendsViewAction";
import PropTypes from "prop-types";
import MovieCard from "../moviePage/cardViewMovies/singleMovieCard/MovieCard";
import {loadMovieList} from "../../store/actions/movieListActions";


class OtherProfileMovie extends Component {
    componentDidMount() {
        this.props.loadCurrentUser();
        this.props.fetchData();



    }
    render() {

        return this.isLoading() ? this.showLoading() :
            this.hasError() ? this.showError() : this.displayCard();
    }

    hasError() {
        return this.props.hasError;
    }

    isLoading() {
        return this.props.isLoading;

    }

    displayCard() {
        const user = this.props.currentUser;

        console.log('user', user);

        if (!user) {
            return (<div>Not FOUND</div>);
        }
        return (
            <Fragment>
                {!this.props.authenticated ? <Redirect to='/' /> : null}
                <HeaderProfile
                    {...user}
                />

                <div className="poster__row ">

                    {this.props.userMovies.map((movie, i) => {
                        return <MovieCard {...movie}
                                          key={i}/>
                    })}

                </div>

            </Fragment>
        )
    }

}

OtherProfileMovie.propTypes = {
    loadCurrentUser: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired,
    userMovies: PropTypes.array.isRequired,
    fetchData: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,

};


function mapStateToProps(state) {
    const thisUser = state.currentUser.user;
    return {
        currentUser: thisUser,
        authenticated: state.user.authenticated,
        userMovies: state.movies.filter(movie => movie.userId === thisUser._id),

    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        loadCurrentUser() {
            const id = ownProps.match.params.id; // get id from router
            console.log('loadCurrentMovie', ownProps);
            dispatch(friendsViewActions.loadUserById(id));

        },
        fetchData: () => dispatch(loadMovieList())


    }

};

export default connect(mapStateToProps, mapDispatchToProps)(OtherProfileMovie)
