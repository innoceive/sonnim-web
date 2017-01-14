import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navigation/Navbar';
import Dimmer from './common/Dimmer';
import SideMenu from './navigation/SideMenu';
import PostContainer from './main/PostContainer';
import DetailViewContainer from './detail/DetailViewContainer';
import SearchContainer from './home/SearchContainer';


class App extends React.Component {
    constructor() {
        super(...arguments)
        this.showSideMenu = this.showSideMenu.bind(this)
        this.hideSideMenu = this.hideSideMenu.bind(this)
        this.state = {
            route: this.getHashCode()
        };
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.hideSideMenu()
            this.setState({
                route: this.getHashCode()
            });
        });
    }

    getHashCode() {
        return window.location.hash.substr(1);
    }

    showSideMenu() {
        this.refs.dimmer.showDimmer();
        this.refs.sideMenu.showSideMenu();
        this.freezeScroll();

    }

    hideSideMenu() {
        this.refs.dimmer.hideDimmer();
        this.refs.sideMenu.hideSideMenu();
        this.unfreezeScroll();
    }

    freezeScroll() {
        var body = document.getElementsByTagName('body')[0];
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        body.style.overflow = 'hidden';
        body.style.paddingTop = (top * -1) + "px";
    }

    unfreezeScroll() {
        var body = document.getElementsByTagName('body')[0];
        body.style.overflow = "auto";
        body.style.paddingTop = "0px";
    }

    render() {
        let Content;

        switch(this.state.route) {
            case 'list': Content = PostContainer; break;
            case 'detail': Content = DetailViewContainer; break;
            default: Content = SearchContainer;
        }

        return (
            <div>
                <Navbar ref="navBar" showSideMenu={this.showSideMenu} />
                <SideMenu ref="sideMenu" hideSideMenu={this.hideSideMenu} />
                <div ref="container" className="container">
                    <Content />
                </div>
                <Dimmer ref="dimmer" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
