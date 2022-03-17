import styled from 'styled-components';
import { useEffect } from 'react';
import { ceil } from "lodash";

const Wrapper = styled.div`
    background-color: #81bee5;
    padding: 10px;
    width: 80%;
    border-radius: 25px;
`

const Container = styled.div`
    max-width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`

const Title = styled.h3`
    font-size: 20px;
    width: 100%;
    word-wrap: break-word;
    text-align: center;
    color: #fff;
`
const Temp = styled.h3`
    font-size: 22px;
    color: #fff;
`

const Image = styled.img`
    height: 100px;
    width: 100px;
`

const Label = styled.div`
    width: 100%;
    font-size: 16px;
    word-wrap: break-word;
    text-align: center;
    color: #ccccff;
    margin-top: 10px;
`

export const Weather = ({ getWeather, weather, location, language }) => {

  useEffect(() => {
    getWeather({location, language});
  }, []);

  return (
      <Wrapper>
          <Container>
              <Title>{weather && weather.city}</Title>
              <Image src={weather && `http://openweathermap.org/img/w/${weather.icon}.png`} />
              <Temp>{weather && ceil(weather.temp, 1)} °C</Temp>
              <Label>{weather && weather.description}</Label>
          </Container>
      </Wrapper>
  );
}
