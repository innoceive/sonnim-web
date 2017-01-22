import {Component} from 'react';

export class ModalPop extends Component{
  constructor(){
    super();
    this.state = {
      gender: "",
      id: 0,
      minimum: 0,
      capacity: 0,
      name: "",
      type: ""
    }
  }

  componentWillReceiveProps(props){
    const room = props.value;
    this.setState({
      gender: room.gender,
      id: room.id,
      minimum: room.minimum,
      capacity: room.capacity,
      name: room.name,
      type: room.type
    });
  }

  render(){
    const imgStyle = {
      width: '100%',
      height: 'auto'
    };
    return (
      <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">{this.state.name}</h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <img src="https://cdn.univ20.com/wp-content/uploads/2016/01/73e28748fb8ae7aa7b48e496d7547293.jpg" alt="" style={imgStyle}/>
                  </div>
                  <div className="col-md-4">
                      <div>방타입</div>
                      <div>{this.state.type}</div>
                  </div>
                  <div className="col-md-4">
                      <div>최소 인원수</div>
                      <div>{this.state.minimum}</div>
                  </div>
                  <div className="col-md-4">
                      <div>수용 인원</div>
                      <div>{this.state.capacity}</div>
                  </div>
                  <div className="col-md-4">
                      <div>성별</div>
                      <div>{this.state.gender}</div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
