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

    appendPostList(addedList){
        this.setState({
            postList: this.state.postList.concat(addedList)
        });
    }

    componentDidMount(){
        var _this = this;

        // Optionally the request above could also be done as
        axios.get('http://beta.api.sonnim.kr/guesthouse/search', {
            params: {
                ID: 12345
            }
        }).then(function (response) {
            if(response.status == 200) {
                var data = response.data;

                console.log(_this);
                if(data.result == "success") {
                    _this.appendPostList(data.data);
                }
            } else {
                console.log(response.status);
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }

    render(){
        return (
            <PostList postList = { this.state.postList } />
        );
    }
}

export default PostListContainer;