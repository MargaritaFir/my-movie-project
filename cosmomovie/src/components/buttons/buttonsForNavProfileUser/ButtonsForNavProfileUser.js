import React from 'react';
import {Link} from 'react-router-dom';

const ButtonsForNavProfileUser = () =>

    <div className="profile-header__btn">
        <Link to="/otherusers" ><button><i>Other Users</i></button></Link>
    </div>

export default ButtonsForNavProfileUser;
