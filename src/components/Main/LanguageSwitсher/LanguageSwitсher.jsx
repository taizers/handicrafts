import styled from 'styled-components';
import { map } from 'lodash';

import Language from './Language/index';
import { LOCALES } from "../../../locales/locales";

const Container = styled.div`
  padding: 20px;
  background-color: #fff;
`
const List = styled.ul`
    display: flex;
`

export const LanguageSwitсher = ({ setLanguage }) => {
  return (
      <Container>
          <List>
              {map(LOCALES, (locale) => <Language key={locale} onLanguageClick={setLanguage} language={locale} />)}
          </List>
      </Container>
  );
}