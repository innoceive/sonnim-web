import React, {Component} from 'react';
import axios from 'axios';
import {CreateMap} from './Map';
import {tmpData} from './TempData';
import {RoomListCard} from './DetailRoomListCard';

class DetailViewContainer extends Component {
    constructor() {
        super();
        this.state = {
            responseData: tmpData.data
        };
    }

    componentDidMount() {
        console.log("in did mount");
        // Optionally the request above could also be done as
/*        axios.get('http://beta.api.sonnim.kr/guesthouse/detail/1')
            .then(response => {
                //console.log(response);
                this.setState({responseData: response.data.data});
                console.log(this.state.responseData);
            })
            .catch(function (error) {
                console.log(error);
            });*/
        //this.setState({responseData: tmpData.data});
    }

    CheckInTime(timeObject) {
        const time = timeObject;
        if(typeof time.start == 'undefined'){
            console.log("skip")
            return;
        }
        console.log("nonskip");
        console.log(timeObject);

        var timeSlice = function(object){
            var start = object.start.slice(0,5);
            var end = object.end.slice(0,5);
            var out = object.out.slice(0,5);
            return ({startTime : start, endTime: end, outTime: out});
        }

        const times = timeSlice(timeObject);
        console.log(times);
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
        console.log(responseData);
        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-0">
                    <div className="thumbnail">
                        <img src={responseData.imageUrl} alt=""/>
                        <div className="caption">
                            <h3 className="guestHouseName">{responseData.name}</h3>
                            <p className="guestHouseAddress">{responseData.address}</p>
                            {this.CheckInTime({
                                start: responseData.checkinStart,
                                end: responseData.checkinEnd,
                                out: responseData.checkout
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
                <div className="col-md-4">
                    {responseData.rooms.map(function(room){
                        return (<RoomListCard key={room.id}>
                                {room}
                            </RoomListCard>);
                    })}
                </div>
            </div>
        );
    }
}

export default DetailViewContainer;