import React, { Component } from 'react';
import { render } from 'react-dom';
import {Container} from 'flux/utils';
import SearchActionCreators from '../action/SearchActionCreators';
import SearchStore from '../store/SearchStore';

class SearchBar extends Component {

    componentDidMount(){
        SearchActionCreators.fetchSearchableRegions();
    }

    render() {
        return (
            <div className="search-bar">
                <div className="region"/>
                <input type="text" className="search-word"/>
                <button>검색</button>
            </div>
        )
    }
}

SearchBar.getStores = () => ([SearchStore]);
SearchBar.calculateState = (prevState) => ({
    regions: SearchStore.getState().get('regions'),
    recommends: SearchStore.getState().get('recommends')
});

const SearchBarContainer = Container.create(SearchBar);

export default SearchBarContainer;
