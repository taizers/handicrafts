import styled from 'styled-components';
import { useEffect } from 'react';

import LastPosts from "./LastPosts/index";
import Weather from "./Weather/index";

const Container = styled.div`
`


const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 30px;
`

const SubTitle = styled.h3`
  font-weight: 700;
  margin: 20px 0;
`

const Text = styled.p`
  margin: 10px 0;
`

const List = styled.ul`
  margin-left: 20px;
`

const ListItem = styled.li`
  font-weight: 600;
  margin: 5px 0;
`

export const Home = ({ userLocation, getUserLocation }) => {
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
  

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Container className="container">
        <LastPosts />
        {userLocation && <Weather location={userLocation} />}
        <Title>Ремёсла Беларуси</Title>
    </Container>
  );
}
