import React from "react";
import {Link} from 'react-router-dom';

const MovieCard = (props) => (

    <div className="poster">
        <div className="poster__wrapper">
            <img className="poster__image" src={props.Poster} alt=""/>
            <div className="poster__header">
                <div className="poster__rating">
                    <span>{props.imdbRating}</span>
                </div>

            </div>
            <div className="poster__info">

                <div className="poster__content">

                    <span className="poster__year">{props.Year}</span>
                    <h3 className="poster__title"><Link className="js-title" to={`/movie/${props._id}`} >{props.Title}</Link></h3>
                    <p className="poster__actors">{props.Actors}</p>
                    <Link to={`/movie/${props._id}`} className="poster__button">Read more</Link>
                </div>
            </div>
        </div>
    </div>
);

export default MovieCard;

