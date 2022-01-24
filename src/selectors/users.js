import { createSelector } from 'reselect';

const user = (store) => store.user;

export const selectUserSignedIn = createSelector(user, user => user.signedIn);
