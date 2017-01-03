/**
 * Created by swacle on 2017. 1. 3..
 */
import React from 'react';

class Condition extends React.Component {
    render() {
        return (
            <li href="#">
                <a href="javascript:;">
                    { " " + this.props.condition.value}
                </a>
            </li>
        )
    }
}

class Filter extends React.Component {

    render(){
        var conditions = this.props.filter.conditionList.map((condition) => {
            return <Condition condition={condition} />
        });

        return (
            <li className="sn_filter">
                <h3>{this.props.filter.title}</h3>
                <ul className="sn_conditions">
                    {conditions}
                </ul>
            </li>
        )
    }
}

export default Filter;