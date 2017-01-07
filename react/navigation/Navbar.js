import React from 'react';

import SideMenu from './SideMenu';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-faded">
                    <a href="/" id="nav-icon"/>
                    <span id="nav-menu">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </span>
                </nav>
                <SideMenu />
            </div>
        );
    }
}
export default Navbar;