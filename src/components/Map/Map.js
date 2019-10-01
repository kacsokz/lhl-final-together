import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import "components/Map/Map.scss";
// require('dotenv').config()

import config from 'config'

console.log("CONFIG", config)

const mapStyles = {
  width: '35rem',
  height: '30rem'
};

export class MapContainer extends Component {

  displayMarkers = () => {
    return this.props.happyHours.map((happyHour, index) => {
      return <Marker key={index} id={index} position={{
        lat: happyHour.lat,
        lng: happyHour.lng
      }}
        onClick={() => console.log("You clicked me again!")} />
    })
  }

  render() {
    return (
      <div className="map-header">
        <div className="something">
          <div>
            <div className="text-header">Happy hours</div>
          </div>
          <Map
            google={this.props.google}
            zoom={10}
            style={mapStyles}
            initialCenter={{
              lat: 51.0447,
              lng: -114.0719
            }}
          >
            {this.displayMarkers()}
          </Map>
        </div>
      </div>
    );
  }
}

const MyMap = (props) => {
  const [apiKey, setKey] = React.useState();

  React.useEffect(() => {
    fetch(`${config.API_PATH}/mapApiKey`)
    .then(res => {
      console.log('RES', res)
      return res.json()
    })
    .then(data => setKey(data.key))
  }, [])

  if (!apiKey) return <h1>Fetching google api key ...</h1>;

  const WrappedMap = GoogleApiWrapper({
    apiKey
  })(MapContainer)

  return <WrappedMap {...props} />
}

export default MyMap;