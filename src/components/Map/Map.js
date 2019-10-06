import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import 'components/Map/Map.scss';
import axios from 'axios';

import config from 'config';

const mapStyles = {
  width: '35rem',
  height: '30rem'
};

let markersFromDB = [
  { id: "1", name: "happyHour1", start_time: "15:00", end_time: "16:40", lat: 51.0447, lng: -114.0719 },
  { id: "2", name: "happyHour2", start_time: "15:00", end_time: "16:40", lat: 51.0457, lng: -114.0719 },
  { id: "3", name: "happyHour3", start_time: "15:00", end_time: "16:40", lat: 51.0447, lng: -114.0739 },
  { id: "3", name: "happyHour3", start_time: "15:00", end_time: "16:40", lat: 51.0467, lng: -114.0759 }
]

export class MapContainer extends Component {

  

  displayMarkers = () => {
    return markersFromDB.map((happyHour, index) => {
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
      axios.get(`${config.API_PATH}/api/mapApiKey`)
        .then(res => setKey(res.data));
  }, [])

  if (!apiKey) return <h1>Fetching google api key ...</h1>;

  const WrappedMap = GoogleApiWrapper({
    apiKey
  })(MapContainer)

  return <WrappedMap {...props} />
}

export default MyMap;