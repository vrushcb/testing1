import './Bell/css/style.css';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <section className="hero">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12">
                <a className="hero-brand" href="index.html" title="Home"><img alt="parking logo" src="https://cdn4.iconfinder.com/data/icons/smart-city-vol-3/32/smart_parking_car_automatic_vehicle_park-512.png" width='200px' height='200px'></img></a>
              </div>
            </div>

            <div className="col-md-12">
              <h1>
                A theme with personality
                </h1>

              <p className="tagline">
                This is a powerful theme with some great features that you can use in your future projects.
                </p>
            <input type="text"/>
            </div>
          </div>

        </section>

        <header id="header">
          <div className="container">

            <div id="logo" className="pull-left">
              <a href="index.html"><img src="img/logo-nav.png" alt="" title="" ></img></a>
            {/* <!--<h1><a href="#hero">Bell</a></h1>--> */}
          </div>

          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li><a href="#about">About Us</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#team">Team</a></li>
              <li className="menu-has-children"><a href="">Drop Down</a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="menu-has-children"><a href="#">Drop Down 2</a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                  <li><a href="#">Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>

          <nav className="nav social-nav pull-right d-none d-lg-inline">
            <a href="#"><i className="fa fa-twitter"></i></a> <a href="#"><i className="fa fa-facebook"></i></a> <a href="#"><i className="fa fa-linkedin"></i></a> <a href="#"><i className="fa fa-envelope"></i></a>
          </nav>
          </div>
        </header>


        <section className="about" id="about">
    <div className="container text-center">
      <h2>
          About Bell Theme
        </h2>

      <p>
        Voluptua scripserit per ad, laudem viderer sit ex. Ex alia corrumpit voluptatibus usu, sed unum convenire id. Ut cum nisl moderatius, per nihil dicant commodo an. Eum tacimates erroribus ad. Atqui feugiat euripidis ea pri, sed veniam tacimates ex. Menandri
        temporibus an duo.
      </p>

      <div className="row stats-row">
        <div className="stats-col text-center col-md-3 col-sm-6">
          <div className="circle">
            <span className="stats-no" data-toggle="counter-up">232</span> Satisfied Customers
          </div>
        </div>

        <div className="stats-col text-center col-md-3 col-sm-6">
          <div className="circle">
            <span className="stats-no" data-toggle="counter-up">79</span> Released Projects
          </div>
        </div>

        <div className="stats-col text-center col-md-3 col-sm-6">
          <div className="circle">
            <span className="stats-no" data-toggle="counter-up">1,463</span> Hours Of Support
          </div>
        </div>

        <div className="stats-col text-center col-md-3 col-sm-6">
          <div className="circle">
            <span className="stats-no" data-toggle="counter-up">15</span> Hard Workers
          </div>
        </div>
      </div>
    </div>
  </section>
      </div >
        );
  }
}

export default App;
