import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";


class SmallUserCard extends Component{


    render() {


        return (
            <div className="people-card">
                <div className="people-card__avatar" style={{backgroundImage: `url(${this.props.image})`}}>
                    {/* <img src={this.props.image} alt=""/> */}
                </div>

                <div className="people-card__info ">
                    <div className="people-card__nickName">{this.props.name}</div>
                </div>
                <div className="people_button_state">
                    <span className="people-card__viewProfile" title="View profile"><Link to={`/otherprofile/${this.props._id}`} > View <i className="fas fa-eye"></i> </Link></span>
                    { this.props.loggedUser.friends && this.props.loggedUser.friends.find((friend => friend._id ===this.props._id))?
                        ( <span className="people-card__deleteUser"  onClick={this.props.onDeleteFriend} title="Delete this user"> Delete <i className="fas fa-user-minus"> </i></span>) :
                        ( <span onClick={this.props.onAddFriend} className="people-card__addUser">Add <i className="fas fa-plus" > </i></span>)}


                </div>

            </div>
        );
    }
}




SmallUserCard.propTypes ={
    onAddFriend: PropTypes.func.isRequired,
    onDeleteFriend:PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {
        loggedUser: state.user.userInfo,
    };
}


export default connect(mapStateToProps)(SmallUserCard);
