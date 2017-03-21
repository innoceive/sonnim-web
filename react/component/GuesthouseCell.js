import React from 'react';
import LabelList from './../common/component/LabelList.js';
import {Link} from 'react-router';

class GuesthouseCell extends React.Component {
    render() {
        return (
            <li className="sn-post" >
                <div className="sn-post-image pull-left">
                    <Link to={'/detail/'+this.props.guesthouse.id} className="post__link">
                        <img src={this.props.guesthouse.imageUrl} alt="test"/>
                    </Link>
                </div>
                <div className="sn-post-content">
                    <h4 className="sn-post-title">
                        <a className="sn-post-name">{this.props.guesthouse.name}</a>
                        <a className="sn-post-address">{this.props.guesthouse.address}</a>
                    </h4>
                    <LabelList labels={this.props.guesthouse.labels} />

                    <div className="sn-post-map">
                        <img src={this.props.guesthouse.mapImageUrl} alt="test"/>
                    </div>
                </div>
            </li>
        )
    }
}
export default GuesthouseCell;
