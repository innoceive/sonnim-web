import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navigation/Navbar';
import PostContainer from './main/PostContainer';
import Dimmer from './common/Dimmer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <PostContainer />
                <Dimmer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));