/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

'use strict';

import React from 'react';

export type Props = {value: string};

function PostListView(props: Props): React.Element<*> {
  return <div>{props.value}</div>;
}

export default PostListView;


/*
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Post from './Post';
import FilterContainer from './FilterContainer';
import axios from 'axios';

class PostContainer extends Component {
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
        var posts = this.state.postList.map((post) => {
            return <Post key={post.id}
                         post={post} />
        });

        return (
            <div>
                <FilterContainer />
                <div className="sn-post-box">
                    <ul className="sn-post-list">
                        {posts}
                    </ul>
                </div>
            </div>

        );
    }
}

export default PostContainer;
*/
