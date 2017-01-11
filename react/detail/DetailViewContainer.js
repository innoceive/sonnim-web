import React, {Component} from 'react';
import axios from 'axios';
import {CreateMap} from './Map';

class DetailViewContainer extends Component {
    constructor() {
        super();
        this.state = {
            responseData: []
        };
    }

    componentDidMount() {
        console.log("in did mount");
        // Optionally the request above could also be done as
        axios.get('http://beta.api.sonnim.kr/guesthouse/detail/1')
            .then(response => {
                //console.log(response);
                this.setState({responseData: response.data.data});
                console.log(this.state.responseData);
            })
            .catch(function (error) {
                console.log(error);
            });
        // this.setState({responseData: tmpData.data});
    }

    CheckInTime(timeObject) {
        if(typeof (timeObject.startTime) == 'undefined')
            return;

        let times = (timeObject) => ({
            startTime: timeObject.checkinStart.slice(0, 5),
            endTime: timeObject.checkinEnd.slice(0, 5),
            outTime: timeObject.checkout.slice(0, 5)
        });
        times();
        return (
            <div>
                <p className="guestHouseCheckInTime">체크인 : {times.startTime}
                    ~ {times.endTime}</p>
                <p className="guestHouseCheckOutTime">체크아웃 : {times.outTime}</p>
            </div>
        );
    }

    render() {
        const responseData = this.state.responseData;
        console.log("in render");
        //console.log(responseData);
        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="thumbnail">
                        <img src={responseData.imageUrl} alt=""/>
                        <div className="caption">
                            <h3 className="guestHouseName">{responseData.name}</h3>
                            <p className="guestHouseAddress">{responseData.address}</p>
                            {this.CheckInTime({
                                startTime: responseData.checkinStart,
                                endTime: responseData.checkinEnd,
                                outTime: responseData.checkout
                            })}
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