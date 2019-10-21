import React from "react";
import {Link} from 'react-router-dom';

const MovieCard = (props) => (

    <div className="poster">
        <div className="poster__wrapper">
            <img className="poster__image" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`} alt=""/>
            <div className="poster__header">
                <div className="poster__rating">
                    <span>{props.vote_average}</span>
                </div>

            </div>
            <div className="poster__info">

                <div className="poster__content">

                    <span className="poster__year">{props.release_date}</span>
                    <h3 className="poster__title"><Link className="js-title" to={`/movie/${props._id}`} >{props.title}</Link></h3>
                    <Link to={`/movie/${props._id}`} className="poster__button">Read more</Link>
                </div>
            </div>
        </div>
    </div>
);

export default MovieCard;

