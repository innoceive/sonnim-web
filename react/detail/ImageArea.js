/**
 * Created by Administrator on 2016-12-24.
 */

import React, {Component} from 'react';
import {render} from 'react-dom';

class ImageArea extends Component {
    constructor(){
        super();
        this.state = {
            imageUrl: null,
        };
    }

    render(){
        const imgStyle = {
            height: '400px',
            width: 'auto'
        };

        return (
            <img src={this.props.imageUrl} className="img-thumbnail" alt="" style={imgStyle}/>
        );
    }

}

export default ImageArea;