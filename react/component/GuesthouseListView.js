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
import NavigationActionCreators from '../action/NavigationActionCreators';
import GuesthouseStore from '../store/GuesthouseStore';
import GuesthouseActionCreators from '../action/GuesthouseActionCreators';
import GuesthouseItem from './GuesthouseItem';
import FilterListView from './FilterListView';
import FilterStore from '../store/FilterStore';

class GuesthouseListView extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            type: 'list'
        };
    }

    componentDidMount(){
        GuesthouseActionCreators.fetchGuesthouses();
        NavigationActionCreators.updateNavigationItems([{
            location: "right",
            element: (
                <span id="nav-menu" key="1" onClick={this.onClickChangeTypeButton.bind(this)} />
            )
        }]);
        NavigationActionCreators.updateNavigationTitle("list");
    }

    onClickChangeTypeButton() {
        if(this.state.type == 'map') {
            this.setState({
                type: 'list'
            });
        } else {
            this.setState({
                type: 'map'
            });
        }
    }

    render(){
        var guesthouses = this.state.guesthouses.map((guesthouse) => {
            return <GuesthouseItem key={guesthouse.id}
                            guesthouse={guesthouse} />
        });

        if(this.state.type == "map") {
            return (
                <div>
                    Hello, world!
                </div>
            )
        } else {
            return (
                <div>
                    <div className="sn-guesthouse-box">
                        <ul className="sn-guesthouse-list">
                            {guesthouses}
                        </ul>
                    </div>
                </div>

            );
        }
    }
}

GuesthouseListView.getStores = () => ([GuesthouseStore, FilterStore]);
GuesthouseListView.calculateState = (prevState) => ({
    guesthouses: GuesthouseStore.getState(),
    filters: FilterStore.getState()
});

const GuesthouseListViewContainer = Container.create(GuesthouseListView);

export default GuesthouseListViewContainer;
