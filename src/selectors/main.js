import { createSelector } from 'reselect';

const isMainPageLoading = (store) => store.main.loading;

export const selectIsMainPageLoading = createSelector(isMainPageLoading, loading => loading);