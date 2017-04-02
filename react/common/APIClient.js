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
        axios.get('http://beta.api.sonnim.kr/filter/list')
        .then((response) => {
            if(response.status == 200 && response.data.mid == "GET_FILTER_LIST" && response.data.result == "success") {
                success(response.data.data);
            }
        }).catch((error) => {
            fail(error);
        });
    },

    fetchSearchableRegions(success, fail) {
        axios.get('http://beta.api.sonnim.kr/filter/list')
        .then((response) => {
            if(response.status == 200 && response.data.mid == "GET_FILTER_LIST" && response.data.result == "success") {
                success(response.data.data);
            }
        }).catch((error) => {
            fail(error);
        });
    },

    fetchSearchRecommend(word, success, fail) {
            axios.get('http://beta.api.sonnim.kr/recommend/' + word)
        .then((response) => {
            if(response.status == 200 && response.data.mid == "GET_RECOMMEND_FILTERS" && response.data.result == "success") {
                success(response.data.data);
            }
        }).catch((erorr) => {
            fail(error);
        });
    }
};

export default APIClient;
