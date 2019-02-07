import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {userActions} from "../../store/actions/userActions";

class RegistrationPage extends Component {

    submit = (values) => {
        this.props.createUser(values);
    }

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
        const {handleSubmit} = this.props;

        return (

        <div>
            <section className="registration">

                <form className="security-form" onSubmit={handleSubmit(this.submit)} method="post">
                    <div className="form-heading">
                        <h1>Sign Up</h1>
                    </div>

                    <div className="form-control">
                        <i className="fas fa-user-shield"></i>
                        <Field
                            name="name"
                            component="input"
                            type="text"
                            placeholder="Name"
                        />
                    </div>

                    <div className="form-control">
                        <i className="fas fa-user"></i>
                        <Field
                            name="Nickname"
                            component="input"
                            type="text"
                            placeholder="Nickname"
                        />
                    </div>
                    <div className="form-control">
                        <i className="fas fa-envelope-open"></i>
                        <Field name="email"
                               component="input"
                               type="email"
                               placeholder="Email"
                        />
                    </div>

                    <div className="form-control">
                        <i className="fas fa-unlock"></i>
                        <Field name="password"
                               component="input"
                               type="password"
                               placeholder="Password"
                        />
                    </div>

                    <button className="btn-form" type="submit">Submit</button>

                    <div className="form-alternate-link">
                        <Link to="/">Already have an account?</Link>
                    </div>
                </form>

                {this.errorMessage()}
            </section>

        </ div>
        );
    }

}


function mapStateToProps(state) {
    return {errorMessage: state.user.authFailureError};
}

const reduxFormSignup = reduxForm({
    form: 'signup'
})(RegistrationPage);


const mapDispatchToProps = (dispatch) => {
    return {
        createUser(user) {
            dispatch(userActions.createUser(user));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(reduxFormSignup);
