import React, { useState } from "react";
import { isEmpty, filter } from "lodash";
import L from "leaflet";
import {
  TileLayer,
  MapContainer,
  LayersControl,
  Marker,
  Popup,
} from "react-leaflet";
import styled from 'styled-components';

const Container = styled.div`
`

const Title = styled.h3`
  font-size: 14px;
`

const Image = styled.img`
  width: 100px;
  height: 50px;
`

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};

export const Map = ({ markers }) => {
  const [map, setMap] = useState(null);
  console.log(markers);
  return (
      <MapContainer
        center={[53.9, 27.56667]}
        zoom={7}
        zoomControl={false}
        style={{ height: "80vh", width: "100%", padding: 0, color: 'black', zIndex: 1 }}
        whenCreated={map => setMap(map)}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={maps.base}
        />
        {console.log(markers[0])}
        {markers && markers.map((post) => 
          (post.location && <Marker key={`marker-${post.id}`} position={{lat: +post.location[0], lng: +post.location[1]}}>
            <Popup>
              <Container>
                <Image src={post.images[0]} />
              <Title>{post.title}</Title>
              </Container>
            </Popup>
          </Marker>)
        )}
      </MapContainer>
  );
};
