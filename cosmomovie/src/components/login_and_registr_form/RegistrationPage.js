import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {userActions} from "../../store/actions/userActions";
import RegistrationForm from './RegistrationForm';

class RegistrationPage extends Component {

    submit = (form) => {
        this.props.createUser(form.name, form.Nickname,form.email, form.password);
        console.log(form.name, form.Nickname,form.email, form.password);
    };

    errorMessage() {
        if (this.props.errorMessage) {
            return (
                <div className="info-red">
                    {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {

        return (

        <div>
            <section className="registration">
            {this.props.authenticated ? <Redirect to='/mymovies' /> : null}
            <RegistrationForm onSubmit={this.submit} />
        
                {this.errorMessage()}
            </section>

        </ div>
        );
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
        createUser(name, Nickname, email, password) {
            console.log({name, Nickname, email, password});
            dispatch(userActions.createUser(name, Nickname, email, password));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
