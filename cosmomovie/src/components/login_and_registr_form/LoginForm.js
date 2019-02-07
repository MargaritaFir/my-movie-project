import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import React from "react";

const LoginForm = (props) => {
    const {handleSubmit} = props;

    return (
        <form className="security-form" onSubmit={handleSubmit}>
            <div className="form-heading">
                <h1>Welcome </h1>
            </div>


            <div className="form-control">
                <i className="fas fa-user"> </i>
                <Field name="email"
                       component="input"
                       type="text"
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

            <button className="btn-form" type="submit">Sign in</button>


            <div className="form-alternate-link">
                <Link to="regist">Don't have an account?</Link>
            </div>
        </form>
    );
};


export default reduxForm({
    form: 'signin'
})(LoginForm);
