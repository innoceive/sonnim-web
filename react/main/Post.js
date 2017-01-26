import React from 'react';
import LabelList from './../common/component/LabelList.js';
import {Link} from 'react-router';

class Post extends React.Component {
    render() {
        return (
            <li className="sn-post" >
                <div className="sn-post-image pull-left">
                    <Link to={'/detail/'+this.props.post.id} className="post__link">
                        <img src={this.props.post.imageUrl} alt="test"/>
                    </Link>
                </div>
                <div className="sn-post-content">
                    <h4 className="sn-post-title">
                        <a className="sn-post-name">{this.props.post.name}</a>
                        <a className="sn-post-address">{this.props.post.address}</a>
                    </h4>
                    <LabelList labels={this.props.post.labels} />
                </div>
                <div className="sn-post-map">
                    <img src={this.props.post.mapImageUrl} alt="test"/>
                </div>
            </li>
        )
    }
}
export default Post;
