import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navigation/Navbar';
<<<<<<< HEAD
<<<<<<< HEAD
import PostContainer from './main/PostContainer';
=======
import PostListContainer from './list/PostListContainer';
>>>>>>> adebb5744449a038e928c0aa6123734dc38b5d25
=======
import PostListContainer from './list/PostListContainer';
>>>>>>> adebb5744449a038e928c0aa6123734dc38b5d25

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
<<<<<<< HEAD
<<<<<<< HEAD
                <PostContainer />
=======
                <PostListContainer />
>>>>>>> adebb5744449a038e928c0aa6123734dc38b5d25
=======
                <PostListContainer />
>>>>>>> adebb5744449a038e928c0aa6123734dc38b5d25
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));