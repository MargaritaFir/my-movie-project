import React from 'react';
import {Route, Switch} from "react-router-dom";
import Search from '../searchMovie/Search';
import LoginPage from '../login_and_registr_form/LoginPage';
import MoviePage from '../moviePage/moviePage';
import RegistrationPage from '../login_and_registr_form/RegistrationPage';
import SingleLargeMoviePage from "../singleMoviePage/SingleLargeMoviePage";
import ProfileUser from "../userProfile/ProfileUser";
import LargeMovieCard from "../largeCardMovie/LargeMovieCard";
import OtherProfileMovie from "../otherProfileMovie/OtherProfileMovie";
import UsersPage from "../usersPage/UsersPage";

const RouteMain = () =>
    <div>
        <Switch>
            <Route exact path='/' component={LoginPage}/>
            <Route path='/search' component={Search}/>
            <Route path = '/movie/:id' component ={SingleLargeMoviePage}/>
            <Route path = '/otherprofile/:id' component ={OtherProfileMovie}/>
            <Route path='/mymovies' component={MoviePage}/>
            <Route path='/myfriends' component={ProfileUser}/>
            <Route path='/regist' component={RegistrationPage}/>
            <Route path='/searchmovie/:id' component={LargeMovieCard}/>
            <Route path ='/otherusers' component={UsersPage}/>
        </Switch>
    </div>

export default RouteMain;
