import axios from 'axios';

let APIClient = {
    fetchGuesthouses(success, fail) {
        axios.get('http://beta.api.sonnim.kr/guesthouse/search', {
            params: {
                ID: 12345
            }
        }).then(function (response) {
            if(response.status == 200 && response.data.mid == "GET_GUESTHOUSE_LIST" && response.data.result == "success") {
                success(response.data.data);
            }
        }).catch(function (error) {
            fail(error);
        });
    },

    fetchFilters(success, fail) {
        axios.get('http://beta.api.sonnim.kr/filters')
        .then((response) => {
            if(response.status == 200 && response.data.mid == "GET_FILTER_LIST" && response.data.result == "success") {
                success(response.data.data);
            }
        }).catch((error) => {
            fail(error);
        });
    },

    fetchGuesthouse(param, success, error){
        axios.get('http://beta.api.sonnim.kr/guesthouse/detail/'+param)
        .then(function (response) {
            if(response.status == 200 && response.data.mid == "GET_GUESTHOUSE_DETAIL" && response.data.result == "success") {
                success(response.data.data);
            }
        }).catch(function (error) {
            /*write error process*/
        });
    },

    fetchRoomImages(param, success, error){
        axios.get('http://beta.api.sonnim.kr/room/images/'+param)
        .then(function (response) {
            if(response.status == 200 && response.data.mid == "GET_ROOM_IMAGES" && response.data.result == "success") {
                success(response.data.data);
            }
        }).catch(function (error) {
            /*write error process*/
        });
    }
};

export default APIClient;
