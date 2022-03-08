import styled from 'styled-components';
import { map } from 'lodash';

import Language from './Language/index';
import { LOCALES } from "../../../locales/locales";

const Container = styled.div`
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