import AppDispatcher from '../AppDispatcher';
import constants from '../constants';

let NavigationActionCreators = {
    updateNavigationItems(items) {
        AppDispatcher.dispatch({
            type: constants.UPDATE_NAVIGATION_ITEMS,
            payload: {items}
        });
    },

    updateNavigationTitle(title) {
        AppDispatcher.dispatch({
            type: constants.UPDATE_NAVIGATION_TITLE,
            payload: {title}
        });
    }
};

export default NavigationActionCreators;
