import AppDispatcher from '../AppDispatcher';
import APIClient from '../common/APIClient';
import constants from '../constants';

let SearchActionCreators = {
    fetchSearchRecommends(word) {
        let _this = this;
        APIClient.fetchSearchRecommends(word, (response) => {
            _this.fetchSearchRecommendsSuccess(response);
        }, (error) => {
            _this.fetchSearchRecommendsError(error);
        });
        AppDispatcher.distpatch({
            type: constants.UPDATE_SEARCH_RECOMMENDS
        });
    },

    fetchSearchRecommendsSuccess(response) {
        AppDispatcher.dispatch({
            type: constants.FETCH_SEARCH_RECOMMENDS_SUCCESS,
            payload: {response}
        });
    },

    fetchSearchRecommendsError(error) {
        AppDispatcher.dispatch({
            type: constants.FETCH_SEARCH_RECOMMENDS_ERROR,
            payload: {error}
        })
    },

    fetchSearchableRegions() {
        let _this = this;
        APIClient.fetchSearchableRegions((response) => {
            _this.fetchSearchableRegionsSuccess(response);
        }, (error) => {
            _this.fetchSearchableRegionsError(error);
        });
        AppDispatcher.dispatch({
            type: constants.UPDATE_SEARCHABLE_REGIONS
        });
    },

    fetchSearchableRegionsSuccess(response) {
        AppDispatcher.dispatch({
            type: constants.FETCH_SEARCHABLE_REGIONS_SUCCESS,
            payload: {response}
        });
    },

    fetchSearchableRegionsError(error) {
        AppDispatcher.dispatch({
            type: constants.FETCH_SEARCHABLE_REGIONS_ERROR,
            payload: {error}
        });
    }
};

export default SearchActionCreators;
