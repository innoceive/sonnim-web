import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './navigation/Navbar';
import PostListContainer from './list/PostListContainer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <PostListContainer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));