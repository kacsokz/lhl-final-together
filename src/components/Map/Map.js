import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "components/Map/Map.scss";
import axios from "axios";

import config from "config";
import { getAllBars } from "../../helpers/selecters";
import { useApplicationData } from "../../hooks/useApplicationData";

const mapStyles = {
  width: "60%",
  height: "90%"
};



let markersFromDB = [
  { id: "2", name: "happyHour2", start_time: "15:00", end_time: "16:40", lat: 51.0457, lng: -114.0719 },
  { id: "3", name: "happyHour3", start_time: "15:00", end_time: "16:40", lat: 51.0447, lng: -114.0739 },
  { id: "3", name: "happyHour3", start_time: "15:00", end_time: "16:40", lat: 51.0467, lng: -114.0759 }
];


export class MapContainer extends Component {
  
  displayMarkers = (arg) => {
    // console.log(arg)
    return arg.map((happyHour, index) => {

      
      return (
        <Marker
          key={happyHour.id}
          id={happyHour.id}
          position={{
            lat: happyHour.longitude,
            lng: happyHour.latitude
          }}
          onClick={() => console.log("You clicked me again!")}
        />
      );
    });
  };

  render() {
    return (
      <div className="map-object">
        <div className="map-header">
          <div className="text-header">Happy Hours</div>
        </div>
        <div className="map-body">
          <Map
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={{
              lat: 51.0447,
              lng: -114.0719
            }}
          >
            {this.displayMarkers(this.props.bars)}
          </Map>
        </div>
      </div>
    );
  }
}

const MyMap = props => {
  const [apiKey, setKey] = React.useState();

  React.useEffect(() => {
    axios.get(`${config.API_PATH}/api/mapApiKey`).then(res => setKey(res.data));
  }, []);

  if (!apiKey) return <h1>Fetching google api key ...</h1>;

  const WrappedMap = GoogleApiWrapper({
    apiKey
  })(MapContainer);

  return <WrappedMap {...props} />;
};

export default MyMap;
