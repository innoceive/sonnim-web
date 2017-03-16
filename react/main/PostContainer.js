/**
 * Copyright (c) 2014-present, Facebook, Inc.
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
import PostListStore from './PostListStore';
import PostListView from './PostListView';
import {Container} from 'flux/utils';

function getStores() {
  return [
    PostListStore,
  ];
}

function getState() {
  return {
    value: PostListStore.getState(),

    // $FlowExpectedError: Cannot dispatch an incorrectly formed action.
    onPostListChange: () => AppDispatcher.dispatch({
      type: 'postList',
      postList: 'Hello Posts!',
    }),
  };
}

export default Container.createFunctional(PostListView, getStores, getState);
