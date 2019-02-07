import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userActions} from "../../store/actions/userActions";
import LoginForm from "./LoginForm";
import {Redirect} from "react-router";

class LoginPage extends Component {

submit = (form) => {
        this.props.signIn(form.email, form.password);
    };


    errorMessage() {
        return !this.props.errorMessage ? null : (
            <div className="info-red">
                {this.props.errorMessage}
            </div>
        );
    }

    render() {


        return (
            <section className="registration">
                {this.props.authenticated ? <Redirect to='/mymovies' /> : null}
                <LoginForm onSubmit={this.submit}/>
                {this.errorMessage()}
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.user.authFailureError,
        authenticated: state.user.authenticated,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn(username, password) {
            dispatch(userActions.signIn(username, password));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);


