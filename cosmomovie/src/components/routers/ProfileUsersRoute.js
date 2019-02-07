import React from "react";

import {Route, Switch} from "react-router-dom";
import UsersPage from "../usersPage/UsersPage";
import UserFriends from "../userProfile/userFriends/UserFriends";


const ProfileUsersRoute = () =>
    <Switch>
        <Route exact path='/myfriends' component={UserFriends}/>
        <Route path='/myfriends/friends' component={UserFriends}/>
        <Route path='/myfriends/other' component={UsersPage}/>
    </Switch>


export default ProfileUsersRoute;
