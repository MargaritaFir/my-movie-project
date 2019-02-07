import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link, NavLink} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div className="navbar-wrapper">

                <nav role="navigation">
                    <div className="logo">
                        <h1>CosmoMovies</h1>
                    </div>
                    <div id="menuLarge">
                        <ul className="menu-lg">
                            <li className="list-item"><Link to='/search' className="link"
                                                               >Search</Link></li>
                            { this.props.authenticated ? null : (
                                <li className="list-item"><Link to='/' className="link"
                                                                 >Login</Link></li>
                            )
                            }
                            {
                                !this.props.authenticated ? null : (
                                    <React.Fragment>
                                        <li className="list-item"><Link to='/mymovies' className="link">My
                                            Movie</Link></li>
                                        <li className="list-item"><Link to='/myfriends' className="link"
                                                                           >Friends</Link></li>

                                        <li className="list-item"><Link to='/' className="link">Logout</Link></li>
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
                            { this.props.authenticated ? null : (


                                <li><Link to='/'>Login</Link></li>)}
                            {
                                !this.props.authenticated ? null : (
                                    <React.Fragment>
                                    <li><Link to="/mymovies">My movies</Link></li>
                                    <li> < Link to="/myfriends">Friends</Link></li>
                                <li><Link to="/" >Logout</Link></li>
                                </React.Fragment>)
                            }

                        </ul>
                    </div>

                </nav>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.user.authenticated,

    };
}

export default connect(mapStateToProps)(Navigation);
