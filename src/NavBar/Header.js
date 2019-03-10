import '../mapBox/MapBox.css';
import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import fire from '../LoginStyle/Firebase';
import Home from '../LoginStyle/Home';
import ExButton from './Existing';


import Login from '../LoginStyle/Login';

class Header extends React.Component {
    // state = { showMenu: 'Existing User ?' };


    //     this.setState({
    //         showMenu: {this.props.name},
    //     });

    constructor(props) {
        super(props);

        this.state = {
            email: 'Exist ?'
        };

       // this.setState({ email: (this.props.userin.email) })
       // console.log(this.props.userin.email);

    }

    toggleHandle = (test) => {
        const el = findDOMNode(this.refs.test)
        $(el).slideToggle();
    }

    logout = () => {
        fire.auth().signOut();
    }


    render() {
    //    console.log(this.props.userHy);
        return (
            <div>
                <section id="header">
                    <div className="header-area">
                        {/* <!--End of top header--> */}
                        <div className="header_menu text-center navBinkami" style={{ marginTop: '-50px' }} data-spy="affix" data-offset-top="50" id="nav">
                            <nav style={{ backgroundColor: 'white' }} className="navbar navbar-default zero_mp navbar-fixed-top navBaresh ">
                                <div className="container" >

                                    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                        <a className="navbar-brand" href="#"><img className="logoSize" src="https://www.iconspng.com/uploads/green-parking/green-parking.png" alt="logo" height="65px" width="70px"></img></a>
                                        <li><h2 style={{ color: '#0676B7', marginBottom: '10px', fontSize: '25px' }}>𝐒𝖒𝖆𝖗𝖙 𝐏𝖆𝖗𝖐</h2></li>
                                        {/* 𝕾𝖒𝖆𝖗𝖙 𝕻𝖆𝖗𝖐 */}
                                    </div>

                                    <div className="collapse navbar-collapse zero_mp" id="bs-example-navbar-collapse-1">
                                        <ul className="nav navbar-nav navbar-right main_menu">
                                            <li className="active"><a href="#header">Home <span className="sr-only">(current)</span></a></li>
                                            <li><a href="#welcome">about</a></li>
                                            <li><a href="#map">Search for places</a></li>

                                            {/* <li><a href="#counter">achivment</a></li>
                                            <li><a href="#event">event</a></li>
                                            <li><a href="#testimonial">testimonialNO</a></li>
                                            <li><a href="#blog">blog</a></li> */}
                                            <li><a href="#contact">contact us</a></li>
                                            {/* <li><Link to="/login">Login</Link></li> */}

                                            <li>
                                                <div className="dropdown">
                                                    <button className="dropbtn button dropdown-toggle">EXISTING USER ?</button>
                                                    <div className="dropdown-content">
                                                        <a href="/login">login</a>
                                                        <a href="/login">SignUp</a>
                                                        <a href="#" onClick={this.logout}>Logout</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}


export default Header;