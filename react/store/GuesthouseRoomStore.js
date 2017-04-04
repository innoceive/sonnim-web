import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import {ReduceStore} from 'flux/utils';
import {Map, List} from 'immutable';

class GuesthouseRoomStore extends ReduceStore {
	/*
	* how to make dynamically state
	*/
    getInitialState() {
        return Map({
          roomClassNames: List(["","","","","",""]),
          roomImageList: List([[],[],[],[],[],[]]),
        });
    }

    reduce(state, action) {
        switch (action.type) {
            case constants.UPDATE_ROOM_EXPAND_STATE:
                return state.set('roomClassNames', state.get('roomClassNames').set(action.index.index, action.payload.state));
            case constants.FETCH_ROOM_IMAGES_SUCCESS:
                return state.set('roomImageList', state.get('roomImageList').set(action.index.index, action.payload.response));
            default:
                return state;
        }
    }
}

export default new GuesthouseRoomStore(AppDispatcher);
