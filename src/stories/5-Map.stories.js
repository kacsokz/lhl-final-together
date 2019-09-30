import React from 'react';
import MapContainer from 'components/Map/Map';

export default {
  title: 'Map',
};

let markersFromDB = [
  { id: "1", name: "happyHour1", start_time: "15:00", end_time: "16:40", lat: 51.0447, lng: -114.0719 },
  { id: "2", name: "happyHour2", start_time: "15:00", end_time: "16:40", lat: 51.0457, lng: -114.0719 },
  { id: "3", name: "happyHour3", start_time: "15:00", end_time: "16:40", lat: 51.0447, lng: -114.0739 },
  { id: "3", name: "happyHour3", start_time: "15:00", end_time: "16:40", lat: 51.0467, lng: -114.0759 }
]

export const Map = () => (
  <MapContainer happyHours={markersFromDB}></MapContainer>
);