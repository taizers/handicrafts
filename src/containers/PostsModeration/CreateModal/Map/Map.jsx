import React, { useState } from "react";
import { isEmpty } from "lodash";
import {
    TileLayer,
    MapContainer,
    Marker,
    useMapEvents,
} from "react-leaflet";

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};

export const Map = ({ setCurrentPosition, currentPosition }) => {

    const MyComponent = () => {
        const map = useMapEvents({
            click: (e) => {
                console.log([e.latlng.lat,e.latlng.lng]);
                setCurrentPosition([e.latlng.lat,e.latlng.lng]);
            },
        })
        return null
    }

  return (
      <MapContainer
        center={[53.9000000, 27.5666700]}
        zoom={6}
        zoomControl={true}
        style={{ height: "250px", width: "100%", padding: 0, color: 'black', }}
        className="routingMap"
      >
          <MyComponent />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={maps.base}
        />
          { currentPosition && <Marker position={currentPosition} draggable={false}/>}
      </MapContainer>
  );
};
