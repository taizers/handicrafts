import { createSelector } from 'reselect';

const featureActions = (store) => store.feature;

export const selectFeatureActions = createSelector(featureActions, feature => feature.feature);
export const selectFeatureActionsError = createSelector(featureActions, feature => feature.error);
export const selectFeatureActionsLoading = createSelector(featureActions, feature => feature.isLoading);
