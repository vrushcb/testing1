import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker, Map, google } from 'google-maps-react';
import Header from '../NavBar/Header';
// import {Link} from 'react-router-dom';
import Login from '../LoginStyle/Login';
import CurrentLocation from './Map';



export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  bookForm = (props) => {
    console.log("sanju");
    
      
      return (
      <div>
        <Login />
        <button onClick={props.addTrip}>Add a trip</button>
      </div>
    );
  };
  

  iconMarker = new window.google.maps.MarkerImage(
    'https://cdn4.iconfinder.com/data/icons/usefull-geo-points-for-maps/512/parking-place-geo-point-location-512.png',
    null, /* size is determined at runtime */
    null, /* origin is 0,0 */
    null, /* anchor is bottom center of the scaled image */
    new window.google.maps.Size(50,50)
  );


  render() {

    return (
      <div>
         {/* <Header />  */}
        <div>
          <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
            <Marker
              onClick={this.onMarkerClick}
              name={'Your location'}
              title={'Your location'} />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
            <Marker
              onClick={this.bookForm}
              //options={{icon: 'https://cdn4.iconfinder.com/data/icons/usefull-geo-points-for-maps/512/parking-place-geo-point-location-512.png', scaledSize:(12,12), size: '12,12'}}
              icon={this.iconMarker}
              title={'Airoli Station parking'}
              name={'Airoli Station parking'}
              position={{ lat: 19.157146, lng: 72.9964705 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Datta Meghe College Of Engineering,Airoli'}
              name={'Datta Meghe College Of Engineering,Airoli'}
              position={{ lat: 19.1580995, lng: 72.9943447 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Pay & Park'}
              name={'Pay & Park'}
              position={{ lat: 18.9911581, lng: 73.1232492 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Parking, Panvel'}
              name={'Parking, Panvel'}
              position={{ lat: 18.9918067, lng: 73.122032 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Dasturi Car Parking'}
              name={'Dasturi Car Parking'}
              position={{ lat: 19.0335708, lng: 73.1982217 }} />
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'voltas Praking'}
              name={'Voltas Prking'}
              position={{ lat:18.9646497, lng: 72.7990557 }} /> 
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Bike Parking'}
              name={'Bike Parking'}
              position={{ lat: 19.0381493, lng: 72.8590869 }} />  
            <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Badlapur'}
              name={'Badlapur'}
              position={{ lat: 19.1667863, lng: 73.2379882 }} />      
          </CurrentLocation>

        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBnOC2cYnLyaaYXtnd_IEQWZLkqvg0tqoE'
})(MapContainer);
