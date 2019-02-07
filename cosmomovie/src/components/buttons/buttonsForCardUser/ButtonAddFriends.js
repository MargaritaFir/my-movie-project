import React from 'react';
import PropTypes from "prop-types";

const ButtonAddFriends = (props) =>

    <span className="people-card__addUser">Add <i className="fas fa-plus" onClick={props.add}> </i></span>

ButtonAddFriends.PropTypes ={
    add: PropTypes.func.isRequired,
}

export default ButtonAddFriends;

