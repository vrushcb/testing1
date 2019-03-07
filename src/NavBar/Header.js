import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div>
                <section id="header">
                    <div className="header-area">
                        <div className="top_header">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 zero_mp">
                                        <div className="address">
                                            <i className="fa fa-home floatleft"></i>
                                            <p>Datta Meghe College Of Engineering, Airoli.</p>
                                        </div>
                                    </div>
                                    {/* <!--End of col-md-4--> */}
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 zero_mp">
                                        <div className="phone">
                                            <i className="fa fa-phone floatleft"></i>
                                            <p>+91 5454545454</p>
                                        </div>
                                    </div>
                                    {/* <!--End of col-md-4--> */}
                                    <div className="col-md-4">
                                        <div className="social_icon text-right">
                                            <a href=""><i className="fa fa-facebook"></i></a>
                                            <a href=""><i className="fa fa-twitter"></i></a>
                                            <a href=""><i className="fa fa-google-plus"></i></a>
                                            <a href=""><i className="fa fa-youtube"></i></a>
                                        </div>
                                    </div>
                                    {/* <!--End of col-md-4--> */}
                                </div>
                                {/* <!--End of row--> */}
                            </div>
                            {/* <!--End of container--> */}
                        </div>
                        {/* <!--End of top header--> */}
                        <div className="header_menu text-center" data-spy="affix" data-offset-top="50" id="nav">
                            <div className="container">
                                <nav className="navbar navbar-default zero_mp ">
                                    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                        <a className="navbar-brand custom_navbar-brand" href="#"><img src="https://1motal1rjacba143y34bvqcn-wpengine.netdna-ssl.com/aviation/wp-content/uploads/sites/52/2016/03/Aviation_Airport_Parking_Icons_Frame6a-1.png" alt="" height="85px" width="90px"></img></a>
                                    </div>

                                    <div className="collapse navbar-collapse zero_mp" id="bs-example-navbar-collapse-1">
                                        <ul className="nav navbar-nav navbar-right main_menu">
                                            <li className="active"><a href="#header">Home <span className="sr-only">(current)</span></a></li>
                                            <li><a href="#welcome">about</a></li>
                                            {/* <li><a href="#counter">achivment</a></li>
                                            <li><a href="#event">event</a></li>
                                            <li><a href="#testimonial">testimonialNO</a></li>
                                            <li><a href="#blog">blog</a></li> */}
                                            <li><a href="#contact">contact us</a></li>
                                            <li><Link to="/login">Login</Link></li>
                                            <li><Link to="/login">SignUp</Link></li>


                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>

        </div>
    );
};


export default Header;