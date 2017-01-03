/**
 * Created by swacle on 2017. 1. 3..
 */
import React from 'react';

class Condition extends React.Component {
    render() {
        return (
            <li>
                <input  type="checkbox" name="chk_info"/>{this.props.condition.value}
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
            <li>
                <strong>{this.props.filter.title}</strong>
                <ul>
                    {conditions}
                </ul>
            </li>
        )
    }
}

export default Filter;