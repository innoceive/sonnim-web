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
import {Map} from 'immutable';

class SearchStore extends ReduceStore {
    getInitialState() {
        return Map({
            regions: [],
            recommends: []
        });
    }

    reduce(state, action) {
        switch (action.type) {
            case constants.FETCH_SEARCHABLE_REGIONS_SUCESS:
                return state.set('regions', action.payload);
            case constants.FETCH_SEARCH_RECOMMENDS_SUCESS:
                return state.set('recommends', action.payload);
            default:
                return state;
        }
    }
}

export default new SearchStore(AppDispatcher);
