import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
class Nav extends Component {

    render() {
        return (
            <div>
                <Link to='/'> 
                    <h4>Home</h4>
                </Link>
                <Link to='/house/create'>
                    <h4>Create House</h4>
                </Link>
            </div>
        );
    };
};

export default Nav;
