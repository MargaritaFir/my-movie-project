import React, {Component} from 'react';
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";


class DetailsCardMovie extends Component{

    render() {
        return (
            <div>
                <div className="big-movieCard">
                    <div className=" row big-movieCard__poster ">
                        <div className="big-movieCard__poster">

                            <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.poster_path}`} alt="This movie has not poster"/>
                            <span className="imdb">IMDb: {this.props.vote_average}</span>
                        </div>
                    </div>


                    <div className="movie-details col-8">

                        <div className="movie-title">{this.props.title}</div>
                        <div className="movie-info">
                            <ul className="movies-actions">
    
                            </ul>
                        </div>
                        <div className="movie-info"><span>Released: </span>{this.changeFormatDate(this.props.release_date)}</div>


                        <div className="movie-info"><span>Description: </span>{this.props.overview}
                        </div>

                        {
                            !this.props.authenticated ? null : (


                                <div className="movie__icons-position">
                                    <div className="movie__icons">
                                        {
                                            !this.props.isAdded? (
                                        <div className="button__star">
                                            { (!this.userHasThisMovie(this.props.id)) ?                                     
                                                ( <label htmlFor="label_star">
                                                
                                                <input type="checkbox" onChange={this.props.onAdd} name="star"
                                                       id="label_star" defaultChecked={this.props.isAdded}/>
                                                <span> </span>
                                            </label>) : (<div style={{color:'green', fontWeight: 600}}>This movie is in your collection</div>)
                                            }

                                        </div>): null
                                        }

                            {((this.props.isWatched  === true || this.props.isWatched  === false) && (this.props.movieDetailsUserId === this.props.authUserId) ) ? 
                                 (<div className="button__view">
                                    <label htmlFor="label_view">
                                        <input className="button__star" onChange={this.props.onWatch}
                                            type="checkbox" name="view"
                                            id="label_view" defaultChecked={this.props.isWatched}/>
                                        <span> </span>
                                    </label>
                                </div>) :null } 

                                    </div>
                                </div>)}

                    </div>
                </div>
            </div>
        );
    }

    changeFormatDate(data){
        const arrMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'  ]
        const currentData = data.split('-'),
            year = currentData[0],
            month = parseInt(currentData[1]),
            day = parseInt(currentData[2]);

            return `${day} ${arrMonth[month-1]} ${year}`

    }

    userHasThisMovie(id){
        const movieNumber = id;
        const userAuthId = this.props.authUserId;
        const userMovies = this.props.movies.filter(movie =>movie.userId ===userAuthId)
        for(let i=0; i<userMovies.length; i++){
            if(userMovies[i].nunberMovie === movieNumber){
                return true
            }
        }

        return false;
    }
}


DetailsCardMovie.propTypes = {
    onAdd: PropTypes.func.isRequired,
    onWatch: PropTypes.func.isRequired,


};

function mapStateToProps(state) {
    return {
        authenticated: state.user.authenticated,
        authUserId: state.user.userInfo._id,
        movieDetailsUserId: state.movieDetails.movie.userId,
        movies: state.movies


    };
}

export default connect(mapStateToProps)(DetailsCardMovie);
