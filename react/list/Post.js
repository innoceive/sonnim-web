import React from 'react';

class Post extends React.Component {
    render() {
        console.log(this.props);

        return (
            <li className="post" >
                <div className="post__title">{this.props.name}</div>
                <div className="post__image">
                    <a href="http://www.naver.com" className="post__link">
                        <img src={this.props.imageUrl} alt="test"/>
                    </a>
                </div>
                <div className="post__body">
                    {this.props.description}
                    {this.props.address}
                </div>
            </li>
        )
    }
}
export default Post;