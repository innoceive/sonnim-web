/**
 * Created by jeonghoon on 2017. 1. 7..
 */
import React from 'react';
import { Router, Route, Link } from 'react-router'

class SideMenu extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            active: false,
            menus: [
                {
                    name: "홈",
                    path: "/",
                },
                {
                    name: "서비스소개",
                    path: "/about",
                },
                {
                    name: "설정",
                    path: "/setting",
                },
                {
                    name: "*리스트",
                    path: "/list",
                },
                {
                    name: "*상세",
                    path: "/detail",
                },
            ]
        }
    }

    toggleSideMenu() {
        this.setState({
            active: !this.state.active
        });
    }

    showSideMenu() {
        this.setState({active: true});
    }

    hideSideMenu() {
        this.setState({active: false});
    }

    render() {
        let menus = this.state.menus.map((menu) => {
            return <li key={menu.path} className="sidemenu-item" onClick={this.props.hideSideMenu}><Link to={menu.path}>{menu.name}</Link></li>
        });

        let style = {display: this.state.active ? 'block' : 'none'};

        return (
            <ul id="sidemenu" style={style}>
                <li id="sidemenu-head">
                    <span id="sidemenu-close" onClick={this.props.hideSideMenu}></span>
                </li>
                {menus}
            </ul>
        )
    }
}

export default SideMenu;
