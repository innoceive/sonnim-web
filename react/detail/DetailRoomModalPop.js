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

  // componentWillReceiveProps(props){
  //   const room = props.value;
  //   this.setState({
  //     gender: room.gender,
  //     id: room.id,
  //     minimum: room.minimum,
  //     capacity: room.capacity,
  //     name: room.name,
  //     type: room.type
  //   });
  // }

  closeModal(){
    var modal = document.getElementById("guesthouse-detail-modal");
    modal.className = "modal fade";
    document.getElementById("modal-img").src = "";
    document.getElementById("modal-roomtype").innerHTML = "";
    document.getElementById("modal-minimum").innerHTML = "";
    document.getElementById("modal-capacity").innerHTML = "";
    document.getElementById("modal-gender").innerHTML = "";
  }

  render(){
    const imgStyle = {
      width: '100%',
      height: 'auto'
    };
    return (
      <div className="modal-container">
        <div className="modal fade" id="guesthouse-detail-modal" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title"></h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <img id="modal-img" src="" alt="" style={imgStyle}/>
                  </div>
                  <div className="col-md-4">
                      <div>방타입</div>
                      <div id="modal-roomtype"></div>
                  </div>
                  <div className="col-md-4">
                      <div>최소 인원수</div>
                      <div id="modal-minimum"></div>
                  </div>
                  <div className="col-md-4">
                      <div>수용 인원</div>
                      <div id="modal-capacity"></div>
                  </div>
                  <div className="col-md-4">
                      <div>성별</div>
                      <div id="modal-gender"></div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" onClick={()=>{this.closeModal();}}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
