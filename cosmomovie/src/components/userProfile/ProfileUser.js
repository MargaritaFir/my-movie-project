import React, {Component, Fragment} from 'react';
import HeaderProfile from "../headerProfile/HeaderProfile";

import {Redirect} from "react-router";
import connect from "react-redux/es/connect/connect";

import ProfileUsersRoute from "../routers/ProfileUsersRoute";


class ProfileUser extends Component {

    render() {
        const user = this.props.userInfo;
        return (
            <Fragment>
                {!this.props.authenticated ? <Redirect to='/' /> : null}
                <HeaderProfile {...user}/>

                <ProfileUsersRoute/>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.user.userInfo,
        authenticated: state.user.authenticated,
    };
}

export default connect(mapStateToProps, null)(ProfileUser);

