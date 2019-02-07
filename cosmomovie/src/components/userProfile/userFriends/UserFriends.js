import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import {connect} from 'react-redux';

import SmallUserCard from "../../smallUserCard/SmallUserCard";
import {loadUsersSelect, usersSelectActions} from "../../../store/actions/usersSelectActions";
import {userActions} from "../../../store/actions/userActions";

class UserFriends extends Component {
    componentDidMount() {
        this.props.loadUsersSelect();
    }

    render() {

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the users</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <Fragment>
                <div className=" people-select">

                    {this.props.friends.map((user) => {

                        return <SmallUserCard
                            key={user._id}
                            {...user}
                            onDeleteFriend={() => this.onDeleteFriend(this.props.loggedUser, user)}

                        />
                    })}

                </div>

            </Fragment>
        )
    }
    onDeleteFriend(loggedUser, user ) {
        console.log('onWatch', user);
        this.props.deleteFriendStatus(loggedUser, user);
    }
}


UserFriends.propTypes = {
    loadUsersSelect: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    friends:PropTypes.array.isRequired,
    loggedUser: PropTypes.object.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    deleteFriendStatus:PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    const loggedUser = state.user.userInfo;
    return {
        friends: state.user.userInfo.friends,
        loggedUser: loggedUser,
        hasErrored: state.usersHasErrored,
        isLoading: state.usersIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadUsersSelect: () => dispatch(usersSelectActions.loadUsersSelect()),
        deleteFriendStatus: (loggedUser, user) => dispatch(userActions.deleteFriendStatus(loggedUser, user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserFriends);
