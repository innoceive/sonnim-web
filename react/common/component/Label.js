/**
 * Created by home on 2017-01-01.
 */
import React from 'react';

class Label extends React.Component {
    render() {
        return (
            <li className="label" >
                <font color={"#"+this.props.label.color}>{this.props.label.label}</font>
            </li>
        )
    }
}
export default Label;
