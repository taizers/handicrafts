import React, { useState } from "react";
import {
  TileLayer,
  MapContainer,
  Marker,
} from "react-leaflet";

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};

export const Map = ({ marker }) => {
  const [map, setMap] = useState(null);

  return (
      <MapContainer
        center={[+marker.latitude, +marker.longitude]}
        zoom={10}
        zoomControl={false}
        style={{ height: "60vh", width: "100%", padding: 0, color: 'black', zIndex: 1 }}
        whenCreated={map => setMap(map)}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={maps.base}
        />
        {marker.longitude && marker.latitude &&
            <Marker key={`marker-${marker.id}`} position={{lat: +marker.latitude, lng: +marker.longitude}}>
          </Marker>
        }
      </MapContainer>
  );
};
