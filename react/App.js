import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './navigation/NavigationBar';
import Dimmer from './common/Dimmer';
import SideMenu from './navigation/SideMenu';
import GuesthouseListView from './component/GuesthouseListView';
import GuesthouseDetailView from './detail/GuesthouseDetailView';
import SearchContainer from './home/SearchContainer';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'


class App extends React.Component {
    constructor() {
        super(...arguments)
        this.showSideMenu = this.showSideMenu.bind(this)
        this.hideSideMenu = this.hideSideMenu.bind(this)
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
        return (
            <div>
                <NavigationBar ref="navBar" showSideMenu={this.showSideMenu} />
                <SideMenu ref="sideMenu" hideSideMenu={this.hideSideMenu} />
                <div ref="container" className="container">
                    {this.props.children}
                </div>
                <Dimmer ref="dimmer" />
            </div>
        );
    }
}

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={SearchContainer} />
            <Route path="about" component={SearchContainer} />
            <Route path="setting" component={SearchContainer} />
            <Route path="list" component={GuesthouseListView} />
            <Route path="detail/:id" component={GuesthouseDetailView} />
        </Route>
    </Router>
), document.getElementById('app'));
