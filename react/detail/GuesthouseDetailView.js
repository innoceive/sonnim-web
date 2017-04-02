import React, {Component} from 'react';
import {Container} from 'flux/utils';
import GuesthouseDetailStore from '../store/GuesthouseDetailStore';
import GuesthouseActionCreators from '../action/GuesthouseActionCreators';
import GuesthouseRoomExpandCard from './GuesthouseRoomExpandCard';

class GuesthouseDetailView extends Component {
    componentDidMount() {
        GuesthouseActionCreators.fetchGuesthouseDetail(this.props.params.id);
    }
    render() {
      const guesthouse = this.state.guesthouse;
      return (
          <div className="row wrap">
            <div className="col-md-8 col-md-offset-2">
              <div className="thumbnail">
                <img src={guesthouse.get('imageUrl')}/>
                <div className="caption">
                    <div className="detail-contents">
                        <div className="detail-name">
                            <h3>{guesthouse.get('name')}</h3>
                        </div>
                        <div className="detail-address">
                            <p>[도로명]{guesthouse.get('address')}</p>
                            <p>[지번]{guesthouse.get('addressLegacy')}</p>
                        </div>
                        <div className="detail-actions">
                            <div className="detail-actons-wrapper">
                                <div className="detail-actions-inquiry">
                                    <img src="/images/phone.png"/>
                                    <p>전화문의</p>
                                </div>
                                <div className="detail-actions-inquiry">
                                    <img src="/images/msg.png"/>
                                    <p>문자메세지</p>
                                </div>
                                <div className="detail-actions-inquiry">
                                    <img src="/images/home.png"/>
                                    <p>웹페이지</p>
                                </div>
                                <div className="detail-actions-inquiry">
                                    <img src="/images/navi.png"/>
                                    <p>길찾기</p>
                                </div>
                            </div>
                        </div>
                        <div className="detail-checkinout">
                            <h3>입실 및 퇴실 정보</h3>
                            <p>입실 {guesthouse.get('checkinStart')} ~ {guesthouse.get('checkinEnd')}</p>
                            <p>퇴실 {guesthouse.get('checkout')}</p>
                            <p>소등 {guesthouse.get('blackout')}</p>
                        </div>
                        <div className="detail-inform">
                            <h3>안내 사항</h3>
                            <p>{guesthouse.get('notice')}</p>
                            <p>{guesthouse.get('breakfast')}</p>
                        </div>
                        <div className="detail-rooms">
                        <h3>방 정보</h3>
                            <ul>
                                {guesthouse.get('rooms').map((room) =>
                                      <li key={room.id}>
                                          <GuesthouseRoomExpandCard room={room} size={guesthouse.get('rooms').length}/>
                                      </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
      );
    }
}

GuesthouseDetailView.getStores = () => ([GuesthouseDetailStore]);
GuesthouseDetailView.calculateState = (prevState) => ({
    guesthouse: GuesthouseDetailStore.getState(),
});

const GuesthouseDetailViewContainer = Container.create(GuesthouseDetailView);

export default GuesthouseDetailViewContainer;
