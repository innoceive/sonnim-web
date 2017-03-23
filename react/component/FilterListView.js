/**
 * Created by swacle on 2017. 1. 3..
 */
/**
 * Created by home on 2017-01-01.
 */


import React, { Component } from 'react';
import { render } from 'react-dom';
import {Container} from 'flux/utils';
import FilterItem from './FilterItem';

class FilterListView extends Component {

    render() {
        var filters = this.props.filters.map((filter) => {
            console.log(filter.id);
            return <FilterItem key={filter.id}
                           filter={filter} />
        });

        return (
            <div className="sn-filter-box">
                <h3 className="sn-filter-header">검색 필터</h3>
                <ul>
                    {filters}
                </ul>
            </div>
        )
    }
}

export default FilterListView;
