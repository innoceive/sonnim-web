import AppDispatcher from '../AppDispatcher';
import constants from '../constants';

let NavBarActionCreators = {
    updateSideMenuDetails(sideMenu) {

        AppDispatcher.dispatch({
            type: constants.UPDATE_SIDEMENU_DETAILS,
            payload: {sideMenu}
        });
    }
};

export default NavBarActionCreators;
