import React, {Component} from "react";
import {Route} from 'react-router-dom'
import ButtonMovie from '../buttons/ButtonMovie';
import ButtonsForNavProfileUser from "../buttons/buttonsForNavProfileUser/ButtonsForNavProfileUser";
import connect from "react-redux/es/connect/connect";



class HeaderProfile extends Component {
    
    render() {
        console.log(this.props);
        return (
            <div>
                <div className="row profile-header" >

                    <div className="profile-imges" >
                        <img src={this.props.image} alt=""/>
                    </div>
                    <div className="profile-info" >
                        <div className="profile-info__nickName">{this.props.name}</div>
                         <div> { this.props.email}</div>
                    </div>
                    { this.props.loggedUser.friends && (this.props.loggedUser.friends.find((friend => friend._id ===this.props._id)))?
                        (<div id="otherProfile_yourFriends">Your friend</div>):""}

                    <Route path="/mymovies" component={ButtonMovie} />
                    <Route path="/myfriends" component={ButtonsForNavProfileUser} />
                </div>


            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        loggedUser: state.user.userInfo,
    };
}


export default connect(mapStateToProps)(HeaderProfile);
