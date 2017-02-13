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
          <li role="presentation" className="active"><a data-toggle="tab" href="#home" onClick={()=>this.activateTab(0)}>Home</a></li>
          <li role="presentation" className=""><a data-toggle="tab" href="#menu11" onClick={()=>this.activateTab(1)} >Menu 1</a></li>
          <li role="presentation" className=""><a data-toggle="tab" href="#menu22" onClick={()=>this.activateTab(2)} >Menu 2</a></li>
          <li role="presentation" className=""><a data-toggle="tab" href="#menu33" onClick={()=>this.activateTab(3)} >Menu 3</a></li>
        </ul>

        <div id="nav_tab_content"className="tab-content">
          <div id="home" className="tab-pane fade in active">
            <h3 className="guestHouseName"></h3>
            <p className="guestHouseAddress"></p>
          </div>
          <div id="information" className="tab-pane fade">
            <h3>Menu 1</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div id="menu22" className="tab-pane fade">
            <div className="col-md-4">
              <ul>
                {this.props.rooms.map((room) => (
                  <li key={room.id}>
                    <a href="javascript:;" className="roomsModalBtn" data-toggle="modal" data-target="#myModal" onClick={() => this.handleClick(room)}>
                      <RoomListCard value={room} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div id="guestHouse_map" className="tab-pane fade">

          </div>
        </div>
      </div>
    );
  }
}
