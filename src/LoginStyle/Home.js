import React, { Component } from 'react';
import fire from './Firebase';

class Home extends Component {

    logout = () => {
        fire.auth().signOut();
    }

    render(props) {
        return (
            <div>
                <h1>Welcome to Home</h1>
                
               <button onClick={this.logout}>Logout</button>
            </div>
        );

    }

}

export default Home;