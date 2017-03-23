import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import APIClient from '../common/APIClient';

let GuesthouseActionCreators = {
    fetchGuesthouses() {
        let _this = this;
        APIClient.fetchGuesthouses((response) => {
            _this.fetchGuesthousesSuccess(response);
        }, (error) => {
            _this.fetchGuesthousesError(error);
        });
        AppDispatcher.dispatch({
            type: constants.FETCH_GUESTHOUSES
        });
    },

    fetchGuesthousesSuccess(response) {
        AppDispatcher.dispatch({
            type: constants.FETCH_GUESTHOUSES_SUCCESS,
            payload: {response}
        });
    },

    fetchGuesthousesError(error) {
        AppDispatcher.dispatch({
            type: constants.FETCH_GUESTHOUSES_ERROR,
            payload: {error}
        });
    }
};

export default GuesthouseActionCreators;