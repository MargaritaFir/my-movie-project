import React from 'react';
import {Link} from 'react-router-dom';

const ButtonMovie = () => (

    <div className="profile-header__btn">
        <Link to="/mymovies/grid" activeClassName="activeMovieButton">
            <button><i className="fas fa-th-large"> </i></button>
        </Link>
        <Link to="/mymovies/table" activeClassName="activeMovieButton">
            <button><i className="fas fa-th-list"> </i></button>
        </Link>

    </div>
);
export default ButtonMovie;
