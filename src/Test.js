import React from 'react';
import Temp from './Temp';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Header from './NavBar/Header';
import App from './mapBox/App';

class Test extends React.Component{
    chu = ( ) => {
        return <div><h1>sanju</h1></div>
    }
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header />
                    <Temp maps={this.chu}/>
                    <Route path='#map' exact component={App} />
                </div>
            </BrowserRouter>
        );
    }
}

export default Test;