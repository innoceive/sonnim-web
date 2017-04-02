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

class NavigationStore extends ReduceStore {
    getInitialState() {
        return Map({
            items: [],
            title: ""
        });
    }

    reduce(state, action) {
        switch (action.type) {
            case constants.UPDATE_NAVIGATION_ITEMS:
                return state.set('items', action.payload.items);
            case constants.UPDATE_NAVIGATION_TITLE:
                return state.set('title', action.payload.title);
            default:
                return state;
        }
    }
}

export default new NavigationStore(AppDispatcher);
