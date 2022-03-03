import styled from 'styled-components';
import { useEffect } from 'react';
import { ceil } from "lodash";

const Container = styled.div`
    max-width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h3`
    font-size: 20px;
    width: 100%;
    word-wrap: break-word;
    text-align: center;
`
const Temp = styled.h3`
    font-size: 20px;
`

const Image = styled.img`
    height: 100px;
    width: 100px;
`

const Label = styled.div`
    width: 100%;
    font-size: 14px;
    word-wrap: break-word;
    text-align: center;
`

export const Weather = ({ getWeather, weather, location }) => {

  useEffect(() => {
    getWeather(location);
  }, []);

  return (
      <Container>
          <Title>{weather && weather.city}</Title>
          <Image src={weather && `http://openweathermap.org/img/w/${weather.icon}.png`} />
          <Temp>{weather && ceil(weather.temp, 1)} °C</Temp>
          <Label>{weather && weather.discription}</Label>
      </Container>

  );
}
