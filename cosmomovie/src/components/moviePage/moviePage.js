import React, {Component} from "react";
import HeaderProfile from '../headerProfile/HeaderProfile';
import RouteUserMovies from '../routers/RouteUserMovies';
import connect from "react-redux/es/connect/connect";
import {Redirect} from "react-router";

class MoviePage extends Component {
    render() {
        const user = this.props.userInfo;

        return (
            <React.Fragment>
                {!this.props.authenticated ? <Redirect to='/' /> : null}
                <HeaderProfile
                    {...user}
                />
                <RouteUserMovies/>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.user.userInfo,
        authenticated: state.user.authenticated,
    };
}

export default connect(mapStateToProps, null)(MoviePage);
