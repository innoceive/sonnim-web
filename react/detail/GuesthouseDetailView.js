import React, {Component} from 'react';
import {ModalPop} from './DetailRoomModalPop';
import {TabContainer} from './DetailTabContainer';
import {Container} from 'flux/utils';
import GuesthouseDetailStore from '../store/GuesthouseDetailStore';
import GuesthouseActionCreators from '../action/GuesthouseActionCreators';

class GuesthouseDetailView extends Component {
    componentDidMount() {
        GuesthouseActionCreators.fetchGuesthouseDetail(this.props.params.id);
    }

    render() {
        console.log(this.state.guesthouse.get("rooms"));
      return (
          <div className="row wrap">
          <script type="text/javascript">{`
            console.log("알럿ㅆㅆㅅ");
        `}
          </script>
            <div className="col-md-8 col-md-offset-2">
              <div className="thumbnail">
                <img src={this.state.guesthouse.get('imageUrl')}/>
                <div className="caption">
                    <div className="detail-contents">
                        <div className="detail-name">
                            <h2>{this.state.guesthouse.get('name')}</h2>
                        </div>
                        <div className="detail-address">
                            <p>[도로명]{this.state.guesthouse.get('address')}</p>
                            <p>[지번]{this.state.guesthouse.get('addressLegacy')}</p>
                        </div>
                        <div className="detail-actions">
                            <div className="detail-actions-inquiry">
                                <img/>
                                <p>전화문의</p>
                            </div>
                            <div className="detail-actions-inquiry">
                                <img/>
                                <p>문자메세지</p>
                            </div>
                            <div className="detail-actions-inquiry">
                                <img/>
                                <p>웹페이지</p>
                            </div>
                            <div className="detail-actions-inquiry">
                                <img/>
                                <p>길찾기</p>
                            </div>
                        </div>
                        <h3>입실 및 퇴실 정보</h3>
                        <div className="detail-checkinout">
                            <p>입실 {this.state.guesthouse.get('checkinStart')} ~ {this.state.guesthouse.checkinEnd}</p>
                            <p>퇴실 {this.state.guesthouse.get('checkout')}</p>
                            <p>소등 {this.state.guesthouse.get('blackout')}</p>
                        </div>
                        <h3>안내 사항</h3>
                        <div className="detail-inform">
                            <p>{this.state.guesthouse.get('notice')}</p>
                            <p>{this.state.guesthouse.get('breakfast')}</p>
                        </div>
                        <h3>방 정보</h3>
                        <div className="detail-rooms">
                            <ul>
                                {this.state.guesthouse.get('rooms').map((room) =>
                                    <li key={room.id}>
                                        {room.name}
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
    guesthouse: GuesthouseDetailStore.getState()
});

const GuesthouseDetailViewContainer = Container.create(GuesthouseDetailView);

export default GuesthouseDetailViewContainer;
