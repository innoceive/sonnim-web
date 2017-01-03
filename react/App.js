import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navigation/Navbar';
import PostContainer from './main/PostContainer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <PostContainer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));