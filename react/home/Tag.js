/**
 * Created by merlin on 2017-01-23.
 */
import React from 'react';

class Tag extends React.Component {
    render() {
        return (
            <li className="tag" >{ this.props.name }</li>
        )
    }
}

export default Tag;
