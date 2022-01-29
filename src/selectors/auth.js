import { createSelector } from 'reselect';

const auth = (store) => store.auth;

export const selectUserSignedIn = createSelector(auth, auth => auth.signedIn);
export const selectUser = createSelector(auth, auth => auth.user);
export const selectUserId = createSelector(auth, auth => auth.user.id);
export const selectUserRole = createSelector(auth, auth => auth.user.role);
