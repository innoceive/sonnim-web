import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import APIClient from '../common/APIClient';

let GuesthouseRoomActionCreators = {
    updateRoomExpandState(index, state){
      AppDispatcher.dispatch({
          type: constants.UPDATE_ROOM_EXPAND_STATE,
          index: {index},
          payload: {state},
      });
    },

    fetchRoomImages(param){
        console.log("fetch");
        let _this = this;
        APIClient.fetchRoomImages(param
          ,(response)=>{_this.fetchRoomImagesSuccess(param-1, response);}
          ,(error)=>{_this.fetchRoomImagesError(param-1, error);})
    },

    fetchRoomImagesSuccess(index, response){
        AppDispatcher.dispatch({
            type: constants.FETCH_ROOM_IMAGES_SUCCESS,
            index: {index},
            payload: {response}
        });
    },

    fetchRoomImagesError(index, error){
        AppDispatcher.dispatch({
            type: constants.FETCH_ROOM_IMAGES_ERROR,
            index: {index},
            payload: []
        });
    }
};

export default GuesthouseRoomActionCreators;
