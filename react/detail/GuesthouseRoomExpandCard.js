/**
 * Created by Administrator on 2017-01-12.
 */
import {Component} from 'react';
import {Container} from 'flux/utils';
import GuesthouseRoomStore from '../store/GuesthouseRoomStore';
import GuesthouseRoomActionCreators from '../action/GuesthouseRoomActionCreators';
import ReactDOM from 'react-dom'

class GuesthouseRoomExpandCard extends Component{
    componentDidMount(){
        GuesthouseRoomActionCreators.fetchRoomImages(this.props.room.id);
    }

    roomListOnClick(){
        const expandDOMElement = ReactDOM.findDOMNode(this).children[1];
        const roomIndex = this.props.room.id - 1;
        if(expandDOMElement.className.indexOf("show") == -1){
            GuesthouseRoomActionCreators.updateRoomExpandState(roomIndex, " show");
        }
        else{
            GuesthouseRoomActionCreators.updateRoomExpandState(roomIndex, "");
        }
    }

    render(){
        const roomProps = this.props.room;
        const roomData = this.state.roomData;
        let roomImages = roomData.get('roomImages').get(roomProps.id-1);

        return(
            <div className="detail-rooms-room" onClick={() => this.roomListOnClick()}>
                <div className="detail-rooms-room-fixed">
                    <p className="room-type">{roomProps.gender} {roomProps.capacity}인 {roomProps.type}</p>
                    <span className="room-name">{roomProps.name}</span>
                    <span className="room-price">{roomProps.price}</span>
                </div>
                <div className={"detail-rooms-room-expand" + roomData.get('roomClassNames').get(roomProps.id - 1)}>
                    <ul>
                        {/*roomImages.map((item)=>
                            <li key={item.id}>
                                <img src={item.imageUrl} alt=""/>
                            </li>
                        )*/}
                    </ul>
                </div>
            </div>
        );
    }
}

GuesthouseRoomExpandCard.getStores = () => ([GuesthouseRoomStore]);
GuesthouseRoomExpandCard.calculateState = (prevState) => ({
    roomData : GuesthouseRoomStore.getState()
})

const GuesthouseRoomExpandCardContainer = Container.create(GuesthouseRoomExpandCard);

export default GuesthouseRoomExpandCardContainer;
