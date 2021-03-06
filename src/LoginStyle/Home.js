import React, { Component } from 'react';
import fire from './Firebase';

class Home extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         email: 'Exist ?'
    //     };

    //     this.setState({ email: (this.props.userin.email) })
    //     console.log(this.props.userin.email);

    // }

    logout = () => {
        fire.auth().signOut();
    }

    render(props) {
        console.log(this.props.userin.email);
        if(this.props.userin !== null){
            return<div className="exstUserbutton">{this.props.userin.email}</div>
        }
        else
        return (
            <div>
               <button className='button' onClick={this.logout}>logout</button>
            </div>
        );

    }

}

export default Home;