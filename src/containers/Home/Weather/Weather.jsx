import styled from 'styled-components';
import { useEffect } from 'react';

const Container = styled.div`
`

const Title = styled.h3`
`
const Temp = styled.h3`
  font-size: 20px;
`

const Image = styled.img`
`

export const Weather = ({ getWeather, weather, weatherCity }) => {
    let arr = [];
    const updatePosition = (position) => {
        if (position) {
            arr = [position.coords.latitude, position.coords.longitude];
            console.log(arr);
            return arr;
        }
    }

    const getLocation = () => {
        if (navigator.geolocation) {
            return navigator.geolocation.getCurrentPosition(updatePosition);
        } else
        return [ 53.6884, 23.8258 ];
    };


    console.log(getLocation());
  useEffect(() => {
      getLocation()
      console.log(arr);

    getWeather(arr);
  }, []);
  console.log(weather);
  return (
      <Container>
          <Title>{weatherCity} {getLocation()}</Title>
          <Temp>{weather && weather.temp_c} °C</Temp>
          <Image src={weather && weather.condition.icon}/>
      </Container>

  );
}