/**
 * Created by jeonghoon on 2017. 1. 7..
 */
import React from 'react';

class SideMenu extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            active: false,
            menus: [
                {
                    name: "홈",
                    hash: "",
                },
                {
                    name: "서비스소개",
                    hash: "#about",
                },
                {
                    name: "설정",
                    hash: "#setting",
                },
                {
                    name: "*리스트",
                    hash: "#list",
                },
                {
                    name: "*상세",
                    hash: "#detail",
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
            return <li key={menu.hash} className="sidemenu-item"><a href={menu.hash}>{menu.name}</a></li>
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
