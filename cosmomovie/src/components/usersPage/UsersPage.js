import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import {connect} from 'react-redux';
//import FormSearchFriends from "../filters/formAutocomplite/FormSearchFrends";
import SmallUserCard from "../smallUserCard/SmallUserCard";
import { usersSelectActions} from "../../store/actions/usersSelectActions";
import {userActions} from "../../store/actions/userActions";

class UsersPage extends Component {


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

                    {this.props.users.map((user, i) => {

                        return <SmallUserCard
                            key={i}
                            {...user}
                            onAddFriend={() => this.onAddFriend(this.props.loggedUser, user)}
                            onDeleteFriend={() => this.onDeleteFriend(this.props.loggedUser, user)}


                        />
                    })}

                </div>

            </Fragment>
        )
    }

    onAddFriend(loggedUser, user) {
        this.props.addFriend(loggedUser, user);
    }

    onDeleteFriend(loggedUser, user) {
        this.props.deleteFriendStatus(loggedUser, user);
    }
}


UsersPage.propTypes = {
    loadUsersSelect: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    loggedUser: PropTypes.object.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    addFriend: PropTypes.func.isRequired,
    deleteFriendStatus: PropTypes.func.isRequired,

};

const mapStateToProps = (state) => {
    const loggedUser = state.user.userInfo;
    const userFriends = state.user.userInfo.friends._id;
    return {
        users: state.users.filter(user => user._id !== loggedUser._id && user !== userFriends),
        loggedUser: loggedUser,
        hasErrored: state.usersHasErrored,
        isLoading: state.usersIsLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadUsersSelect: () => dispatch(usersSelectActions.loadUsersSelect()),
        addFriend: (loggedUser, user) => dispatch(userActions.addFriend(loggedUser, user)),
        deleteFriendStatus: (loggedUser, user) => dispatch(userActions.deleteFriendStatus(loggedUser, user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
