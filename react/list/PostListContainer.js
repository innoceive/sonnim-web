import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import PostList from './PostList';
import axios from 'axios';

class PostListContainer extends Component {
    constructor(){
        super();
        this.state={
            postList: []
        }
    }

    componentDidMount(){
        // Optionally the request above could also be done as
        axios.get('http://beta.api.sonnim.kr/guesthouse/search', {
            params: {
                ID: 12345
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render(){
        return (
            <PostList postList = { this.state.postList } />
        );
    }
}

export default PostListContainer;