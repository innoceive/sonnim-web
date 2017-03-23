import React from 'react';

import SideMenu from './SideMenu';
import {Container} from 'flux/utils';
import NavBarStore from '../store/NavBarStore';

class NavBar extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        var leftItems = this.state.items.filter((item) => {
            return item.location == 'left';
        }).map((item) => {
            return item.element;
        });

        var rightItems = this.state.items.filter((item) => {
            return item.location == 'right';
        }).map((item) => {
            return item.element
        });

        return (
            <div>
                <nav className="navbar navbar-light bg-faded navbar-fixed-top">
                    <ul className="leftItems">
                        {leftItems}
                    </ul>
                    <a href="/" id="nav-icon"/>
                    <ul className="rightItems">
                        {rightItems}
                    </ul>
                </nav>
            </div>
        );
    }
}

NavBar.getStores = () => ([NavBarStore])
NavBar.calculateState = (prevState) => ({
    items: NavBarStore.getState()
});

const NavBarContainer = Container.create(NavBar);

export default NavBarContainer;
