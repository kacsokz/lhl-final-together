import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "components/Map/Map.scss";
import axios from "axios";

import config from "config";

const mapStyles = {
  // width: "85%",
  // height: "100vh",
  // display: "grid",
  // marginTop: '25px',
  // marginLeft: '100px',
  borderRightStyle: "solid",
  borderRightWidth: "2.5px",
  borderRightColor: "#2F2FA2",
  backgroundColor: "#000",
  // borderRadius: "15px",
};

export class MapContainer extends Component {
  
  displayMarkers = (arg) => {
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
