import React from 'react';
import Post from './Post';

class PostList extends React.Component {
    render() {
        var posts = this.props.postList.map((post) => {
            console.log(post.name);

            return <Post post={post} />
        });

        return (
            <div className="post_list">
                <ul>
                    {posts}
                </ul>
            </div>
        );
    }
}

export default PostList;