import { createSelector } from 'reselect';

const handicrafts = (store) => store.handicrafts;

export const selectHandicraftsList = createSelector(handicrafts, handicrafts => handicrafts.handicraftsList);
export const selectHandicraft = createSelector(handicrafts, handicrafts => handicrafts.handicraft);
