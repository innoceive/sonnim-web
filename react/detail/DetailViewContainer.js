import React, {Component} from 'react';
import axios from 'axios';
import {CreateNaverMap, CreateDaumMap} from './Map';
import {tmpData} from './TempData';
import {RoomListCard} from './DetailRoomListCard';
import {ModalPop} from './DetailRoomModalPop';

class DetailViewContainer extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            id: this.props.params.id,
            guestHouse : {
              ghName : "",
              address: "",
              checkinStart: "",
              checkinEnd: "",
              checkout: "",
              imageUrl: "",
              phone: "",
              rooms: [],
              phone: "",
              ghGps: {
                long: 33.46,
                lat: 126.31
              }
            },
            socialNetworks : [],
            currRoom : []
        };
    }

    componentDidMount() {
        // Optionally the request above could also be done as
        axios.get('http://beta.api.sonnim.kr/guesthouse/detail/'+this.state.id)
            .then(function(response){
              let ghdata = response.data.data;
              this.setState({
                guestHouse : {
                  ghName : ghdata.name,
                  address : ghdata.address,
                  checkinStart : ghdata.checkinStart,
                  checkinEnd : ghdata.checkinEnd,
                  checkout : ghdata.checkout,
                  imageUrl : ghdata.imageUrl,
                  phone : ghdata.phone,
                  rooms : ghdata.rooms,
                  phone : ghdata.phone,
                  ghGps : {
                    long : ghdata.longitude,
                    lat : ghdata.latitude
                  }
                }
              });

              let socialNet = this.state.socialNetworks.slice();
              ghdata.socialNetworks.map(function(sn){
                socialNet.push({type : sn.type, url : sn.value});
              });
              this.setState({socialNetworks : socialNet});
            }
            .bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }

    CheckInTime(timeObject) {
        const time = timeObject;
        if(typeof time.start == 'undefined'){
            return;
        }
        console.log(timeObject);

        var timeSlice = function(object){
            var start = object.start.slice(0,5);
            var end = object.end.slice(0,5);
            var out = object.out.slice(0,5);
            return ({startTime : start, endTime: end, outTime: out});
        }

        const times = timeSlice(timeObject);
        return (
            <div>
                <p className="guestHouseCheckInTime">체크인 : {times.startTime}
                    ~ {times.endTime}</p>
                <p className="guestHouseCheckOutTime">체크아웃 : {times.outTime}</p>
            </div>
        );
    }

    handleClick(room){
      this.setState({currRoom : room});
    }

    render() {
      const ghData = this.state.guestHouse;
      return (
          <div className="row wrap">
              <div className="col-md-8 col-md-offset-0">
                  <div className="thumbnail">
                      <img src={ghData.imageUrl} alt=""/>
                      <div className="caption">
                          <h3 className="guestHouseName">{ghData.name}</h3>
                          <p className="guestHouseAddress">{ghData.address}</p>
                          {this.CheckInTime({
                              start: ghData.checkinStart,
                              end: ghData.checkinEnd,
                              out: ghData.checkout
                          })}
                      </div>
                      <CreateNaverMap gps={ghData.ghGps} name={ghData.ghName}/>
                  </div>
              </div>
              <div className="col-md-4">
                <ul>
                  {ghData.rooms.map((room) => (
                    <li key={room.id}>
                      <a href="javascript:;" className="roomsModalBtn" data-toggle="modal" data-target="#myModal" onClick={() => this.handleClick(room)}>
                        <RoomListCard value={room} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <ModalPop value={this.state.currRoom}/>
          </div>
      );
    }
}

export default DetailViewContainer;
