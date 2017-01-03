/**
 * Created by swacle on 2017. 1. 3..
 */
import React from 'react';

class Condition extends React.Component {
    render() {
        return (
            <a href="#" className="list-group-item">
                {this.props.condition.value}
            </a>
        )
    }
}

class Filter extends React.Component {

    render(){
        var conditions = this.props.filter.conditionList.map((condition) => {
            return <Condition condition={condition} />
        });

        return (
            <li>
                <strong>{this.props.filter.title}</strong>
                <div className="list-group">
                    {conditions}
                </div>
            </li>
        )
    }
}

export default Filter;