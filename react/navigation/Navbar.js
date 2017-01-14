import React from 'react';

import SideMenu from './SideMenu';

class Navbar extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-faded navbar-fixed-top">
                    <a href="/" id="nav-icon"/>
                    <span id="nav-menu" onClick={this.props.showSideMenu}></span>
                </nav>

            </div>
        );
    }
}
export default Navbar;
