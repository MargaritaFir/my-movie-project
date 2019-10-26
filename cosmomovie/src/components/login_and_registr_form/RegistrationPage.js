import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {userActions} from "../../store/actions/userActions";
import RegistrationForm from './RegistrationForm';

class RegistrationPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNotFullData:true,
            isValidEmail: true,
        }
    }

    submit = (form) => {
        if(this.validateEmail(form.email)){

        }
    
        if((form.name !==undefined)&&(form.Nickname !==undefined) && (form.email !==undefined)&&(form.password !==undefined)){
            this.setState({isNotFullData:true,
                isValidEmail: true});
            if(this.validateEmail(form.email)){
                
                this.props.createUser(form.name, form.Nickname,form.email, form.password);
                console.log(form.name, form.Nickname,form.email, form.password);
            } else {
                this.setState({isValidEmail: false});
                setTimeout(() => {
                    this.setState({isValidEmail: true});  
                }, 3000);
            }

        } else{
            this.setState({isNotFullData:false});
            setTimeout(() => {
                this.setState({isNotFullData:true});
            }, 3000);
        }

    };

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    notFullData(){

        if(this.state.isNotFullData === false) {
            return (
                <div className="info-red">
                    {"Not all fields are filled!"}
                </div>
            ); 
        } 

    }

    notValidEmail(){
        if(this.state.isValidEmail === false) {

            return (
                <div className="info-red">
                    {"Email is not valid!"}
                </div>
            ); 
        } 
    }

    errorRegistrationMessage() {
        if (this.props.errorRegistrUser) {
            console.log(this.props.errorRegistrUser)
            return (
                <div className="info-red">
                    {"User with email is exist"}
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
        
                {this.errorRegistrationMessage()}
                {this.notFullData()}

                {this.notValidEmail()}
            </section>

        </ div>
        );
    }

}


function mapStateToProps(state) {
    return {
        errorRegistrUser: state.user.errorRegistrUser,
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
