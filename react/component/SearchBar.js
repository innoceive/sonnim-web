import React, { Component } from 'react';
import { render } from 'react-dom';
import {Container} from 'flux/utils';
import SearchActionCreators from '../action/SearchActionCreators';
import SearchStore from '../store/SearchStore';
import {Map} from 'immutable';

class SearchBar extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            regionCode: "",
            regionName: "",
            searchWord: ""
        };
    }

    componentDidMount(){
        SearchActionCreators.fetchSearchableRegions();
    }

    onClickRegion(event) {
        let regionName = event.target.text;
        let regions = this.state.regions;

        for(var i = 0; i < regions.length; i++) {
            let region = regions[i];

            if (regionName == region.name) {
                let newState = {
                    regionCode: region.code,
                    regionName: region.name,
                    searchWord: this.state.searchWord
                };
                this.setState(newState);
            }
        }
    }

    onChangeSearchWord(event) {
        let searchWord = event.target.value;

        let newState = {
            regionCode: this.state.searchWord,
            searchWord: searchWord
        }
        this.setState(newState);
    }

    render() {
        let regions = this.state.regions.map((region) => {
            return (
                <li key={region.id} ><a href="javascript:void(0);" onClick={this.onClickRegion.bind(this)}>{region.name}</a></li>
            );
        });
        let selectedRegionName = this.state.regionName == "" ? "지역검색 " : (this.state.regionName + " ");
        
        return (
            <div className="search-bar">
                <div className="col-lg-6">
                    <div className="input-group">
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {selectedRegionName}
                                <span className="caret"></span></button>
                            <ul className="dropdown-menu">
                                {regions}
                            </ul>
                        </div>
                        <input type="text" className="form-control" aria-label="..." placeholder="검색어" onChange={this.onChangeSearchWord.bind(this)}/>
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-default">검색</button>
                        </div>
                    </div>
                </div>
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
