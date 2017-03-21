import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import APIClient from '../common/APIClient';

let FilterActionCreators = {
    fetchFilters() {
        let _this = this;
        APIClient.fetchFilters((response) => {
            _this.fetchFiltersSuccess(response);
        }, (error) => {
            _this.fetchFiltersError(error);
        });
        AppDispatcher.dispatch({
            type: constants.FETCH_FILTERS
        });
    },

    fetchFiltersSuccess(response) {
        AppDispatcher.dispatch({
            type: constants.FETCH_FILTERS_SUCCESS,
            payload: {response}
        });
    },

    fetchFiltersError(error) {
        AppDispatcher.dispatch({
            type: constants.FETCH_FILTERS_ERROR,
            payload: {error}
        });
    }
};

export default FilterActionCreators;
