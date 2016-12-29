/**
 * Created by jys on 2016. 12. 23..
 */

import React, {Component} from 'react';
import axios from 'axios';
import ImageArea from './ImageArea';
import {tmpData} from './TempData';
import * as BasicComp from './GuestHouseBasicComp';
import {CreateMap} from './Map';

class DetailViewContainer extends Component {
    constructor() {
        super();
        this.state = {
            responseData: []
        };
    }
    componentDidMount () {
        console.log("in did mount");
        // Optionally the request above could also be done as
        axios.get('http://beta.api.sonnim.kr/guesthouse/detail/1')
            .then(response => {
                //console.log(response);
                this.setState({responseData: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            });
        // this.setState({responseData: tmpData.data});
    }

    render() {
        const responseData = this.state.responseData;
        console.log("in render");
        //console.log(responseData);
        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                        <div className="thumbnail">
                            <ImageArea imageUrl={responseData.imageUrl}/>
                            <div className="caption">
                                <BasicComp.Name value={responseData.name}/>
                                <BasicComp.Address value={responseData.address}/>
                                <BasicComp.CheckInTime value={{
                                    start: responseData.checkinStart,
                                    end: responseData.checkinEnd,
                                    out: responseData.checkout
                                }}/>
                            </div>
                            <CreateMap
                                value={{
                                    lat: responseData.latitude,
                                    lng: responseData.longitude,
                                    name: responseData.name
                                }}/>
                        </div>
                </div>
            </div>
        );
    }
}

export default DetailViewContainer;

