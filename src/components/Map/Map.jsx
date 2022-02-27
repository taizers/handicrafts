import React, { useEffect, useState, useRef } from "react";
import { isEmpty } from "lodash";
import L from "leaflet";
import {
  TileLayer,
  MapContainer,
  LayersControl
} from "react-leaflet";
import styled from 'styled-components';

import RoutingControl from './RoutingControl'

const Button = styled.button`

`

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};

export const Map = ({locations, isRoutesActive}) => {
  const [map, setMap] = useState(null);
  const [start, setStart] = useState([38.9072, -77.0369])
  const [end, setEnd] = useState([37.7749, -122.4194])
  console.log(!isEmpty(locations[0]) ? locations[0] : [53.9000000, 27.5666700]);
  return (
      <MapContainer
        center={!isEmpty(locations[0]) ? locations[0] : [53.9000000, 27.5666700]}
        zoom={8}
        zoomControl={true}
        style={{ height: "80vh", width: "100%", padding: 0, color: 'black', }}
        whenCreated={map => setMap(map)}
      >
        {isRoutesActive && <RoutingControl points={locations} />}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={maps.base}
        />
      </MapContainer>
  );
};
