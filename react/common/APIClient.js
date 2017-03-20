import GuesthouseActionCreators from '../action/GuesthouseActionCreators';
import axios from 'axios';

let APIClient = {
    fetchGuesthouses() {
        axios.get('http://beta.api.sonnim.kr/guesthouse/search', {
            params: {
                ID: 12345
            }
        }).then(function (response) {
            if(response.status == 200 && response.data.mid == "GET_GUESTHOUSE_LIST" && response.data.result == "success") {
                GuesthouseActionCreators.fetchGuesthousesSuccess(response.data.data);
            }
        }).catch(function (error) {
            GuesthouseActionCreators.fetchGuesthousesError(error);
        });
    }
};

export default APIClient;
