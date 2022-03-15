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

        center={!isEmpty(marker.longitude) ? [+marker.latitude, marker.longitude] : [53.9, 27.56667]}
        zoom={10}
        zoomControl={false}
        style={{ height: "80vh", width: "100%", padding: 0, color: 'black', zIndex: 1 }}
        whenCreated={map => setMap(map)}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={maps.base}
        />
        {marker.longitude && marker.latitude &&
            <Marker key={`marker-${marker.id}`} position={{lat: +marker.latitude, lng: +marker.longitude}}>
            <Popup>
              <Container>
                  <Image src={marker.images[0].image} />
                  <Title>{marker.title}</Title>
              </Container>
            </Popup>
          </Marker>
        }
      </MapContainer>
  );
};
