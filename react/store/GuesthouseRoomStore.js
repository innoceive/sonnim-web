import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import {ReduceStore} from 'flux/utils';
import {Map, List} from 'immutable';

class GuesthouseRoomStore extends ReduceStore {
    getInitialState() {
        return Map({
          roomClassNames: List(),
          roomImages: List(),
        });
    }

    reduce(state, action) {
        switch (action.type) {
            case constants.UPDATE_ROOM_EXPAND_STATE:
                return state.set('roomClassNames', state.get('roomClassNames').set(action.index.index, action.payload.state));
            case constants.FETCH_ROOM_IMAGES_SUCCESS:
                return state.set('roomImages', state.get('roomImages').set(action.index.index, action.payload.response));
            default:
                return state;
        }
    }
}

export default new GuesthouseRoomStore(AppDispatcher);
