import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './navigation/Navbar';
//import PostListContainer from './list/PostListContainer';
import Detail from './detail/DetailViewContainer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                {/*<PostListContainer />*/}
                <div className="container">
                    <Detail/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));