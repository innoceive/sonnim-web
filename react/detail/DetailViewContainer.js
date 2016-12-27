/**
 * Created by jys on 2016. 12. 23..
 */

import React, {Component} from 'react';
import axios from 'axios';
import ImageArea from './ImageArea';
import {detailData} from './DetailData';

class DetailViewContainer extends Component {
    constructor() {
        super();
        this.state = {
            responseData: null
        };
    }

    componentWillMount () {
        console.log("in cwm");
        // Optionally the request above could also be done as
/*        axios.get('http://beta.api.sonnim.kr/guesthouse/detail/1')
            .then(response => {
                this.setState({responseData: response.data.data});
                console.log(response);
                console.log(this.state.responseData);
            })
            .catch(function (error) {
                console.log(error);
            });*/
        console.log(detailData);
        this.setState({responseData: detailData.data});
        console.log(this.state.responseData);
    }

    render() {
        const responseData = this.state.responseData;
        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-3">
                    <div className="thumbnail">
                        <ImageArea imageUrl={responseData.imageUrl}/>
                            <div className="caption">
                                <h3>Thumbnail label</h3>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailViewContainer;

