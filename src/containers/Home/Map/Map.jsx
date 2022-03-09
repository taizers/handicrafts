import React, { useState } from "react";
import {generatePath, Link} from 'react-router-dom';
import {
  TileLayer,
  MapContainer,
  Marker,
  Popup,
} from "react-leaflet";
import styled from 'styled-components';
import { pathToPost } from "../../../constants";

const Container = styled.div`
  max-width: 150px;
`

const LinkToPost = styled(Link)`
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

export const Map = ({ markers }) => {
  const [map, setMap] = useState(null);

  return (
      <MapContainer
        center={[53.9, 27.56667]}
        zoom={6}
        zoomControl={false}
        style={{ height: "80vh", width: "100%", padding: 0, color: 'black', zIndex: 1 }}
        whenCreated={map => setMap(map)}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={maps.base}
        />
        {markers && markers.map((post) => 
          (post.location && <Marker key={`marker-${post.id}`} position={{lat: +post.location[0], lng: +post.location[1]}}>
            <Popup>
              <Container>
                <LinkToPost to={generatePath(pathToPost, {id: post.id})}>
                  <Image src={post.images[0]} />
                  <Title>{post.title}</Title>
                </LinkToPost>
              </Container>
            </Popup>
          </Marker>)
        )}
      </MapContainer>
  );
};
