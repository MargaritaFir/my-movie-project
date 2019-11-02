import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {userActions} from "../../store/actions/userActions";
import PropTypes from "prop-types";

const Navigation = (props)  => {



        return (
            <div className="navbar-wrapper">

                <nav role="navigation">
                    <div className="logo">
                        <h1>CosmoMov</h1>
                    </div>
                    <div id="menuLarge">
                        <ul className="menu-lg">
                            <li className="list-item"><Link to='/search' className="link"
                                                               >Search</Link></li>
                            { props.authenticated ? null : (
                                <li className="list-item"><Link to='/' className="link"
                                                                 >Login</Link></li>
                            )
                            }
                            {
                                !props.authenticated ? null : (
                                    <React.Fragment>
                                        <li className="list-item"><Link to='/mymovies' className="link">My
                                            Movie</Link></li>
                                        <li className="list-item"><Link to='/myfriends' className="link"
                                                                           >Friends</Link></li>

                                        <li className="list-item" onClick={props.logoutAccaunt}><Link to='/' className="link">Logout</Link></li>
                                    </React.Fragment>)
                            }
                        </ul>
                    </div>
                    <div id="menuToggle">
                        <input type="checkbox"/>
                        <span> </span>
                        <span> </span>
                        <span> </span>
                        <ul id="menu">
                            <li><Link to='/search'>Search</Link></li>
                            { props.authenticated ? null : (


                                <li><Link to='/'>Login</Link></li>)}
                            {
                                !props.authenticated ? null : (
                                    <React.Fragment>
                                    <li><Link to="/mymovies">My movies</Link></li>
                                    <li> < Link to="/myfriends">Friends</Link></li>
                                <li><Link to="/" onClick={props.logoutAccaunt} >Logout</Link></li>
                                </React.Fragment>)
                            }

                        </ul>
                    </div>

                </nav>
            </div>
        );


}



Navigation.propTypes ={
        logoutAccaunt: PropTypes.func.isRequired
}


function mapStateToProps(state) {
    return {
        authenticated: state.user.authenticated,

    };
}

const mapDispatchToProps = (dispatch) =>{
    return {
        logoutAccaunt: () =>dispatch(userActions.signOut())
    }
    
}


export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
