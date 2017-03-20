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

import React, { Component } from 'react';
import { render } from 'react-dom';
import {Container} from 'flux/utils';
import GuesthouseStore from '../store/GuesthouseStore';
import GuesthouseActionCreators from '../action/GuesthouseActionCreators';
import Post from '../main/Post';

class GuesthouseListView extends Component {
    componentDidMount(){
        GuesthouseActionCreators.fetchGuesthouses();
    }

    render(){
        var guesthouses = this.state.guesthouses.map((guesthouse) => {
            return <Post key={guesthouse.id}
                         post={guesthouse} />
        });

        return (
            <div>
                <div className="sn-post-box">
                    <ul className="sn-post-list">
                        {guesthouses}
                    </ul>
                </div>
            </div>

        );
    }
}

GuesthouseListView.getStores = () => ([GuesthouseStore]);
GuesthouseListView.calculateState = (prevState) => ({
    guesthouses: GuesthouseStore.getState()
});

const GuesthouseListViewContainer = Container.create(GuesthouseListView);

export default GuesthouseListViewContainer;
