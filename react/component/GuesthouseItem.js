import React from 'react';
import LabelList from './../common/component/LabelList.js';
import {Link} from 'react-router';

class GuesthouseItem extends React.Component {
    render() {
        return (
            <li className="sn-guesthouse" >
                <div className="sn-guesthouse-image pull-left">
                    <div className="sn-guesthouse-map">
                        <img src={this.props.guesthouse.mapImageUrl} alt="map"/>
                    </div>
                    <Link to={'/detail/'+this.props.guesthouse.id} className="guesthouse__link">
                        <img src={this.props.guesthouse.imageUrl} alt="guesthouse"/>
                    </Link>
                </div>

                <div className="sn-guesthouse-content">
                    <h4 className="sn-guesthouse-title">
                        <a className="sn-guesthouse-name">{this.props.guesthouse.name}</a>
                        <a className="sn-guesthouse-address">{this.props.guesthouse.address}</a>
                    </h4>
                    <LabelList labels={this.props.guesthouse.labels} />
                </div>
            </li>
        )
    }
}
export default GuesthouseItem;
