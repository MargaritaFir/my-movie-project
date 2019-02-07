import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import MovieRowTable from "../../moviePage/tableViewMovies/singleRowMovie/MovieRowTable";
import MovieCard from "../../moviePage/cardViewMovies/singleMovieCard/MovieCard";


const ToggleIconForCardMovie = (props) => {

    const watchedClasses = `fas fa-eye ${props.isWatched ? 'watched' : ''}`;

    return (<div className="movie__icons">

            <div className="button__star">
                <label htmlFor="label_star">
                    <input type="checkbox" name="star" id="label_star" value="1"/>
                    <span> </span>
                </label>

            </div>



)
};

MovieRowTable.propTypes ={
    onWatch: PropTypes.func.isRequired,

};
export default ToggleIconForCardMovie;
/*
*
*             <div className="button__view">

                <i className={watchedClasses} onClick={props.onWatch}> </i>
            </div>

        </div>

        <div className="movie__icons">

        <div className="button__star">
        <i className={addedClasses} onClick={props.onAdd}> </i>
</div>

<div className="button__view">

        <i className={watchedClasses} onClick={props.onWatch}> </i>
</div>*/


        userMovies: state.movies.filter(movie => movie.userId === currentUser._id),



        <div className="poster__row ">

            {this.props.userMovies.map((movie, i) => {
                return <MovieCard {...movie}
                                  key={i}/>
            })}

        </div>
