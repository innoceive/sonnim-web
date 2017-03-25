import React from 'react';
import {Container} from 'flux/utils';
import NavigationStore from '../store/NavigationStore';

class NavigationBar extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        var leftItems = this.state.navItems.filter((item) => {
            return item.location == 'left';
        }).map((item) => {
            return item.element;
        });

        var rightItems = this.state.navItems.filter((item) => {
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
                    <a href="/" id="nav-icon">{this.state.title}</a>
                    <ul className="rightItems">
                        {rightItems}
                    </ul>
                </nav>
            </div>
        );
    }
}

NavigationBar.getStores = () => ([NavigationStore])
NavigationBar.calculateState = (prevState) => ({
    navItems: NavigationStore.getState().get('items'),
    title: NavigationStore.getState().get('title')
});

const NavigationBarContainer = Container.create(NavigationBar);

export default NavigationBarContainer;
