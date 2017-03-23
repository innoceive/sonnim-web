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

class NavBarStore extends ReduceStore {
    getInitialState() {
        return [];
    }

    reduce(state, action) {
        switch (action.type) {
            case constants.UPDATE_SIDEMENU_DETAILS:
                return action.payload.sideMenu;
            default:
                return state;
        }
    }
}

export default new NavBarStore(AppDispatcher);
