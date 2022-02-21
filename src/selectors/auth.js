import { createSelector } from 'reselect';

const auth = (store) => store.auth;

export const selectUserSignedIn = createSelector(auth, auth => auth.signedIn);

export const selectUser = createSelector(auth, auth => auth.user);
export const selectUserId = createSelector(selectUser, user => user?.id);
export const selectUserRole = createSelector(selectUser, user => user?.role);

export const selectUsers = createSelector(auth, auth => auth.users);

const selectCreateUserModal = createSelector(auth, auth => auth.modal);
export const selectCreateUserModalIsVisible = createSelector(selectCreateUserModal, modal => modal.isVisible);
export const selectCreateUserModalIsLoading = createSelector(selectCreateUserModal, modal => modal.isLoading);

