import { createSelector } from 'reselect';

const languageData = (store) => store.language;

export const selectLanguage = createSelector(languageData, language => language.language);
