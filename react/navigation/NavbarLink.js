import React from 'react';

class NavbarLink extends React.Component {
    render() {
        return (
            <li className="nav-item">
                <a className="nav-link" href={this.props.url}>{this.props.name}</a>
            </li>
        )
    }
}
export default NavbarLink;