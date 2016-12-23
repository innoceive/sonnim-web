import React from 'react';
import NavbarLink from './NavbarLink';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-faded">
                    <a className="navbar-brand" href="/">SONNIM</a>
                    <ul className="nav navbar-nav">
                        <NavbarLink name="링크1" url="#menu1" />
                        <NavbarLink name="링크2" url="#menu2" />
                        <NavbarLink name="링크3" url="#menu3" />
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;