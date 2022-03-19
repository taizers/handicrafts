import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import {
  TileLayer,
  MapContainer,
} from "react-leaflet";

import RoutingControl from './RoutingControl'

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};



export const Map = ({ locations }) => {

  const getRoutes = () => {
      return <RoutingControl points={locations}/>;
  };
  return (
      <MapContainer
        center={!isEmpty(locations) ? locations[0] : [53.9000000, 27.5666700]}
        zoom={8}
        zoomControl={false}
        style={{ height: "70vh", width: "100%", padding: '10px', color: 'black', }}
        className="routingMap"
      >
        {!isEmpty(locations) && getRoutes()}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={maps.base}
        />
      </MapContainer>
  );
};
