import React from "react";
import {Link} from 'react-router-dom';



const Rating = ({rating}) => {
    let stars = [];
    for (let i = 1; i < 11; i++) {
      let klass = "fa fa-star";
      if (rating >= i && rating !== null) {
        klass = "fa fa-star checked";
      }
      stars.push(
        <i
          style={{ direction: (i%2===0) ? "rtl" : "ltr"}}
          className={klass}
          />
      );
    }
    return (
      <div className="movie__rating">
        {stars}
      </div>
    );
  }

const SmallCardForSearch = (props) => (

    <Link to={`/searchmovie/${props.title}`} className="poster__button">
        <div className='movie' style={{backgroundImage: `url(https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path})`}}>
            
            
             <span className='movie__year '>{props.release_date.split('-')[0]}</span>

             <h2 className='movie__title'>{props.title}</h2>

            <div className='movie__imdb'>
                <Rating rating={Math.round(props.vote_average)}/>
            </div>

            <div className='movie__imdb_number'>{`${props.vote_average}/10`}</div>
           
        </div>
  </Link>
);

export default SmallCardForSearch;
