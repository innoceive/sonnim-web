import React, {Component} from 'react';
import axios from 'axios';
import {tmpData} from './TempData';
import {ModalPop} from './DetailRoomModalPop';
import {DetailModalContainer} from './DetailModalContainer';
import {TabContainer} from './DetailTabContainer';

class DetailViewContainer extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            id: this.props.params.id,
            guestHouse : {
              ghName : "",
              address: "",
              addressLegacy: "",
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
              },
              breakfast: "",
              wifi: [],
              towel: [],
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
                  addressLegacy : ghdata.addressLegacy,
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
                  },
                  breakfast: ghdata.breakfast,
                  wifi: ghdata.wifi,
                  towel: ghdata.towel
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

    handleClick(room){
      this.setState({currRoom : room});
    }

    render() {
      return (
          <div className="row wrap">
            <div className="col-md-8 col-md-offset-0">
              <div className="thumbnail">
                <img src={this.state.guestHouse.imageUrl} alt=""/>
                <div className="caption">
                  <TabContainer guestHouse={this.state.guestHouse}/>
                </div>
              </div>
            </div>
            <ModalPop/>
          </div>
      );
    }
}

export default DetailViewContainer;
