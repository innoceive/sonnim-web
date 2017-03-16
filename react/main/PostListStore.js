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

import type {Action} from './PostActions';

import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../AppDispatcher';

class PostListStore extends ReduceStore<Action, string> {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState(): string {
    return 'Hello World!';
  }

  reduce(state: string, action: Action): string {
    switch (action.type) {
      case 'postList':
        return action.postList;

      default:
        return state;
    }
  }
}

export default new PostListStore();
