import React, { useState } from "react";
import { isEmpty } from "lodash";
import {
  TileLayer,
  MapContainer,
  Marker,
  Popup,
} from "react-leaflet";
import styled from 'styled-components';

const Container = styled.div`
  max-width: 150px;
`

const Title = styled.h3`
  font-size: 14px;
`

const Image = styled.img`
  width: 100%;
  height: 70px;
`

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};

export const Map = ({ marker }) => {
  const [map, setMap] = useState(null);

  return (
      <MapContainer

        center={!isEmpty(marker.location) ? [+marker.location[0], marker.location[1]] : [53.9, 27.56667]}
        zoom={10}
        zoomControl={false}
        style={{ height: "80vh", width: "100%", padding: 0, color: 'black', zIndex: 1 }}
        whenCreated={map => setMap(map)}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={maps.base}
        />
        {!isEmpty(marker.location) &&
            <Marker key={`marker-${marker.id}`} position={{lat: +marker.location[0], lng: +marker.location[1]}}>
            <Popup>
              <Container>
                  <Image src={marker.images[0]} />
                  <Title>{marker.title}</Title>
              </Container>
            </Popup>
          </Marker>
        }
      </MapContainer>
  );
};
