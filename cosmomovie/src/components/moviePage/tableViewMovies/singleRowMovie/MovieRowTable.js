import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


const MovieRowTable = (props) => {
    const watchedClasses = `fas fa-eye ${props.isWatched ? 'watched' : ''}`;

    return (<tr>
        <td>
            <div className="table-image">
                <img className="poster__image" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`} alt="this movie don/'t have a poster"/>
            </div>

        </td>

        <td data-head='title'><Link to={`/movie/${props._id}`}>{props.title}</Link></td>
        {/* <td data-head='Genre'>{props.Genre}</td> */}
        <td data-head='Rating'> {props.vote_average}</td>
        <td data-head='Year'>{props.release_date}</td>
        <td data-head='View'>
            <i className={watchedClasses} onClick={props.onWatch}> </i>
        </td>
        <td data-head='Remove' className="movie_delete">
            <i className="fas fa-trash-alt" onClick={props.onDelete}> </i>
        </td>

    </tr>);
};

MovieRowTable.propTypes ={
    onWatch: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired

};


export default MovieRowTable;




