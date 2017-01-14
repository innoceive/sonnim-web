/**
 * Created by Administrator on 2017-01-12.
 */
import {Component} from 'react';

export class RoomListCard extends Component{
    render(){
        const room = this.props.children;
        return(
            <div className="thumbnail">
                <div className="caption">
                    <div className="room">
                        <div className="room_name">
                            <p>방이름 : {room.name}</p>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div>방타입</div>
                                <div>{room.type}</div>
                            </div>
                            <div className="col-md-4">
                                <div>최소 인원수</div>
                                <div>{room.minimum}</div>
                            </div>
                            <div className="col-md-4">
                                <div>수용 인원</div>
                                <div>{room.capacity}</div>
                            </div>
                            <div className="col-md-4">
                                <div>성별</div>
                                <div>{room.gender}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}