import styled from 'styled-components';
import { map } from 'lodash';

import Language from './Language/index';
import { LOCALES } from "../../../locales/locales";

const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 25px;
`
const List = styled.ul`
    display: flex;
`

export const LanguageSwitсher = ({ setLanguage, getWeather, userLocation }) => {
  return (
      <Container>
          <List>
              {map(LOCALES, (locale) => <Language key={locale} setLanguage={setLanguage} userLocation={userLocation} getWeather={getWeather} language={locale} />)}
          </List>
      </Container>
  );
}