import React from "react";
import CardViewMovies from '../moviePage/cardViewMovies/CardViewMovies';
import TableViewMovies from '../moviePage/tableViewMovies/TableViewMovies';
import {Route, Switch} from "react-router-dom";


const RouteUserMovies = () =>
    <Switch>
        <Route exact path='/mymovies' component={CardViewMovies}/>
        <Route path='/mymovies/grid' component={CardViewMovies}/>
        <Route path='/mymovies/table' component={TableViewMovies}/>
    </Switch>


export default RouteUserMovies;
