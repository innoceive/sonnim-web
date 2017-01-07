/**
 * Created by jeonghoon on 2017. 1. 7..
 */
import React from 'react';

class SideMenu extends React.Component {
    render() {
        return (
            <ul id="sidemenu">
                <li id="sidemenu-head">
                    <span id="sidemenu-close"></span>
                </li>
                <li className="sidemenu-item"><a>설정</a></li>
                <li className="sidemenu-item"><a>서비스이용정보</a></li>
            </ul>
        )
    }
}
export default SideMenu;
