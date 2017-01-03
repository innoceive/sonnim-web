import React from 'react';
import LabelList from './../common/component/LabelList.js';

class Post extends React.Component {
    render() {
        console.log(this.props);

        return (
            <li className="post" >
                <div className="post_image pull-left">
                    <a href="http://www.naver.com" className="post__link">
                        <img src={this.props.post.imageUrl} alt="test"/>
                    </a>
                </div>
                <div className="post_contents">
                    <div className="post_title">{this.props.post.name}</div>
                    <div className="post_body">
                        {this.props.post.description}
                        {this.props.post.address}
                    </div>
                    <LabelList labels={this.props.post.labels} />
                    <div className="map_image">
                        <img src={this.props.post.mapImageUrl} alt="test"/>
                    </div>
                </div>
            </li>
        )
    }
}
export default Post;