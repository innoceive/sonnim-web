import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import {ReduceStore} from 'flux/utils';
import {Map} from 'immutable';

class GuesthouseDetailStore extends ReduceStore {
    getInitialState() {
        return Map({
            rooms: []
        });
    }

    reduce(state, action) {
        switch (action.type) {
            case constants.FETCH_GUESTHOUSES_DETAIL_SUCCESS:
                return Map(action.payload.response);
            default:
                return state;
        }
    }
}

export default new GuesthouseDetailStore(AppDispatcher);
