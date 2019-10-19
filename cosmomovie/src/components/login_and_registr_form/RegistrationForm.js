import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import React from "react";


const RegistrationForm = (props) =>{
    
    const {handleSubmit} = props;
        return (

            <form className="security-form" onSubmit= {handleSubmit} method="post">
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

        )

}


export default reduxForm({
    form: 'signup'
})(RegistrationForm);