/**
 * Created by Administrator on 2016-12-24.
 */

import React, {Component} from 'react';
import {render} from 'react-dom';

class ImageArea extends Component {

    render(){
        return (
            <img src={this.props.imageUrl} alt=""/>
        );
    }

}

export default ImageArea;