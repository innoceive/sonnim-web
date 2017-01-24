/**
 * Created by swacle on 2017. 1. 3..
 */
import React from 'react';

class Filter extends React.Component {

    render(){
        var conditions = this.props.filter.conditions.map((condition, index) => {
            return (
                <div className="sn-condition-item">
                    <label>
                        <input className="sn-condition-checkbox" type="checkbox" value="" onClick="" >

                        </input>
                        <span className="sn-codition-title">
                            {condition.title}
                        </span>
                        <span className="sn-condition-count">
                            {index*10}
                        </span>
                    </label>
                </div>
            )
        });

        return (
            <li className="sn-filter-item">
                <h3 className="sn-filter-header">
                    <a>
                        <span className="sn-icon sn-expandable"/>
                        {this.props.filter.title}
                    </a>
                </h3>
                <div className="sn-filter-content">
                    <fieldset>
                        {conditions}

                    </fieldset>
                </div>
            </li>
        )
    }
}

export default Filter;
