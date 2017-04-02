import {Component} from 'react';
import {CreateNaverMap, CreateDaumMap} from './Map';
import {RoomListCard} from './DetailRoomListCard';

export class TabContainer extends Component{
  constructor(){
    super();
    this.state = {
      navTabList : {},
      navTabContent: {}
    }
  }

  activateTab(idx){
    const navTabList = this.state.navTabList;
    const navTabContent = this.state.navTabContent;

    for(var i=0; i<4; i++){
      navTabList[i].className = "";
      navTabContent[i].className = "tab-pane fade";
    }
    navTabList[idx].className = "active";
    navTabContent[idx].className = "tab-pane in active";
  }

  popModal(room){
    var modal = document.getElementById("guesthouse-detail-modal");
    modal.className = "modal show";
    document.getElementById("modal-img").src = room.imageUrl;
    document.getElementById("modal-roomtype").innerHTML = room.type;
    document.getElementById("modal-minimum").innerHTML = room.minimum;
    document.getElementById("modal-capacity").innerHTML = room.capacity;
    document.getElementById("modal-gender").innerHTML = room.gender;

    var dimmer = document.getElementById("modal-dimmer");
    dimmer.className = "dimmer show";
  }

  componentDidMount(){
    const navTabList = document.getElementById("nav_tab_list").children;
    const navTabContent = document.getElementById("nav_tab_content").children;
    //console.log(navTabList);
    this.setState({navTabList: navTabList, navTabContent: navTabContent});
  }
  render(){
    return (
      <div role="tabpanel">
        <ul id="nav_tab_list" className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active"><a data-toggle="tab" href="#home" onClick={()=>this.activateTab(0)}>소개</a></li>
          <li role="presentation" className=""><a data-toggle="tab" href="#price" onClick={()=>this.activateTab(1)} >가격정보</a></li>
          <li role="presentation" className=""><a data-toggle="tab" href="#map" onClick={()=>this.activateTab(2)} >방 정보</a></li>
          <li role="presentation" className=""><a data-toggle="tab" href="#something" onClick={()=>this.activateTab(3)} >지도</a></li>
        </ul>

        <div id="nav_tab_content" className="tab-content">
          <div id="home" className="tab-pane fade in active">
            <div className="geuesthouse-name">
              <h3 className="guestHouseName">{this.props.guesthouse.name}</h3>
            </div>
            <div className="guesthouse-address">
              <p className="current">{this.props.guesthouse.address}</p>
              <p className="legacy">{this.props.guesthouse.addressLegacy}</p>
            </div>
            <div className="guesthouse-checkinout">
              <div className="checkin">
                <p>체크 인 : {this.props.guesthouse.checkinStart} ~ {this.props.guesthouse.checkinEnd}</p>
              </div>
              <div className="checkout">
                <p>체크 아웃 : {this.props.guesthouse.checkout}</p>
              </div>
              <div className="phone">
                <p>연락처 : {this.props.guesthouse.phone}</p>
              </div>
            </div>
          </div>
          <div id="information" className="tab-pane fade">
            <div className="breackfast">
              <p>{this.props.guesthouse.breakfast}</p>
            </div>
          </div>
          <div id="menu22" className="tab-pane fade">
            <ul>
              {/*this.props.guesthouse.rooms.map((room) => (
                <li key={room.id}>
                  <a href="javascript:;" className="roomsModalBtn" onClick={()=>this.popModal(room)}>
                    <RoomListCard value={room} />
                  </a>
                </li>
            ))*/}
            </ul>
          </div>
          <div id="guestHouse_map" className="tab-pane fade">
            {/*<CreateDaumMap/>*/}
          </div>
        </div>
      </div>
    );
  }
}
