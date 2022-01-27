import { createSelector } from 'reselect';

const auth = (store) => store.auth;

export const selectUserSignedIn = createSelector(auth, auth => auth.signedIn);
