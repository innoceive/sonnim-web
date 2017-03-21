/**
 * Copyright (c) 2014-present, Roommates, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

'use strict';

import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import {ReduceStore} from 'flux/utils';

class FilterStore extends ReduceStore {
    getInitialState() {
        return [{
            id: 0,
            title: "가격(1박당)",
            conditions: [{
                id: 1,
                title: "₩ 0 - ₩ 59,999"
            },{
                id: 2,
                title: "₩ 60,000 - ₩ 119,999"
            },{
                id: 3,
                title: "₩ 120,000 - ₩ 179,999"
            },{
                id: 4,
                title: "₩ 180,000 - ₩ 239,999"
            },{
                id: 5,
                title: "₩ 240,000 부터"
            }]
        },{
            id: 1,
            title: "가격(1박당)",
            conditions: [{
                id: 11,
                title: "₩ 0 - ₩ 59,999"
            },{
                id: 12,
                title: "₩ 60,000 - ₩ 119,999"
            },{
                id: 13,
                title: "₩ 120,000 - ₩ 179,999"
            },{
                id: 14,
                title: "₩ 180,000 - ₩ 239,999"
            },{
                id: 15,
                title: "₩ 240,000 부터"
            }]
        },{
            id: 2,
            title: "가격(1박당)",
            conditions: [{
                id: 21,
                title: "₩ 0 - ₩ 59,999"
            },{
                id: 22,
                title: "₩ 60,000 - ₩ 119,999"
            },{
                id: 23,
                title: "₩ 120,000 - ₩ 179,999"
            },{
                id: 24,
                title: "₩ 180,000 - ₩ 239,999"
            },{
                id: 25,
                title: "₩ 240,000 부터"
            }]
        },{
            id: 3,
            title: "가격(1박당)",
            conditions: [{
                id: 31,
                title: "₩ 0 - ₩ 59,999"
            },{
                id: 32,
                title: "₩ 60,000 - ₩ 119,999"
            },{
                id: 33,
                title: "₩ 120,000 - ₩ 179,999"
            },{
                id: 34,
                title: "₩ 180,000 - ₩ 239,999"
            },{
                id: 35,
                title: "₩ 240,000 부터"
            }]
        },{
            id: 4,
            title: "가격(1박당)",
            conditions: [{
                id: 41,
                title: "₩ 0 - ₩ 59,999"
            },{
                id: 42,
                title: "₩ 60,000 - ₩ 119,999"
            },{
                id: 43,
                title: "₩ 120,000 - ₩ 179,999"
            },{
                id: 44,
                title: "₩ 180,000 - ₩ 239,999"
            },{
                id: 45,
                title: "₩ 240,000 부터"
            }]
        }];
    }

    reduce(state, action) {
        switch (action.type) {
            case constants.FETCH_FILTERS_SUCCESS:
                return action.payload.response;
            default:
                return state;
        }
    }
}


export default new FilterStore(AppDispatcher);
