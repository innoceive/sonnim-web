/**
 * Created by home on 2017-01-01.
 */
import React from 'react';

class Label extends React.Component {
    render() {
        console.log(this.props.label);

        return (
            <li className="label" >
                <div>
                    <font color={"#"+this.props.label.color}>{this.props.label.label}</font>
                </div>
            </li>
        )
    }
}
export default Label;