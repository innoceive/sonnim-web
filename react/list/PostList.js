import React from 'react';
import Post from './Post';

class PostList extends React.Component {
    render() {
        var posts = this.props.postList.map((post) => {
            console.log(post.name);

            return <Post key={post.id}
                         name={post.name}
                         description={post.description}
                         address={post.address}
                         imageUrl={post.imageUrl} /> 
        });

        return (
            <div>
                <ul className="post-list">
                    {posts}
                </ul>
            </div>
        );
    }
}

export default PostList;