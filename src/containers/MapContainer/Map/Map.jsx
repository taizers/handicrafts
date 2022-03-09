import React, { useState } from "react";
import { isEmpty } from "lodash";
import {
  TileLayer,
  MapContainer,
} from "react-leaflet";

import RoutingControl from './RoutingControl'

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};

export const Map = ({locations, isRoutesActive}) => {
  const [map, setMap] = useState(null);

  return (
      <MapContainer
        center={!isEmpty(locations[0]) ? locations[0] : [53.9000000, 27.5666700]}
        zoom={8}
        zoomControl={true}
        style={{ height: "80vh", width: "100%", padding: 0, color: 'black', }}
        whenCreated={map => setMap(map)}
        className="routingMap"
      >
        {isRoutesActive && <RoutingControl points={locations} />}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={maps.base}
        />
      </MapContainer>
  );
};
