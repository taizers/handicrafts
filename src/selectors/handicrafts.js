import { createSelector } from 'reselect';

const handicrafts = (store) => store.handicrafts;

export const selectHandicraftsList = createSelector(handicrafts, handicrafts => handicrafts.list);