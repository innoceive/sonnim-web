import React, { Component } from 'react';
import { render } from 'react-dom';
import {Container} from 'flux/utils';
import SearchBar from './SearchBar';

class MainView extends Component {


    render() {
        return (
            <div>
                <MainImageView />
                <SearchBar />
            </div>
        )
    }
}

class MainImageView extends Component {
    render() {
        return (
            <div>
                MainImageView
            </div>
        )
    }
}

export default MainView;
