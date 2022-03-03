import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Select from '@atlaskit/select';
import { filter } from 'lodash';

import LastPosts from "./LastPosts/index";
import Weather from "./Weather/index";
import Map from './Map/index';

const Container = styled.div`
  z-index: 500;
`

const SelectContainer = styled.div`
  margin-bottom: 50px;
`

const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 30px;
`

export const Home = ({ userLocation, getUserLocation, postsTypes, getPostsTypes, posts, getPosts }) => {
  const [markers, setSetMarkers] = useState(posts);

  useEffect(() => {
    getLocation();
    getPostsTypes();
    getPosts();
  }, []);

  const updatePosition = (position) => {
      if (position) {
        getUserLocation([position.coords.latitude, position.coords.longitude]);
      }
  }
  
  const getLocation = ()  => {
       if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(updatePosition);
      } else
      getUserLocation([ 53.6884, 23.8258 ]);
  };

  console.log(markers);

  return (
    <Container>
      <Container className="container">
        <Title>Ремёсла Беларуси</Title>
        <LastPosts />
        {userLocation && <Weather location={userLocation} />}
        <SelectContainer>
          <label htmlFor="selectForMap">Какие типы ремёсел отобразить на карте</label>
          <Select
            inputId="selectForMap"
            options={[
              { label: 'Все', value: '' },
              ...postsTypes,
            ]}
            onChange={value => {
              value.value !== '' ?
              setSetMarkers(filter(posts, (post) => {
                  if (value.value === post.type) {
                      return post;
                  }
               })): 
               setSetMarkers(posts);
            }}
            placeholder="Выберите категорию"
          />
        </SelectContainer>
    </Container>
    <Map markers={markers} />
    </Container>
  );
}
