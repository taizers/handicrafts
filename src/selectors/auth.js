import { createSelector } from 'reselect';

const auth = (store) => store.auth;

export const selectToken = createSelector(auth, auth => auth.token);
export const selectUserProfile = createSelector(auth, auth => auth.user);

export const selectUser = createSelector(auth, auth => auth.authUser);
export const selectUserId = createSelector(selectUser, authUser => authUser?.id);
export const selectUserRole = createSelector(selectUser, authUser => authUser?.role);

export const selectUsers = createSelector(auth, auth => auth.users);

const selectAuthModal = createSelector(auth, auth => auth.modal);
export const selectCreateUserModalIsVisible = createSelector(selectAuthModal, modal => modal.isVisible);
export const selectCreateUserModalIsLoading = createSelector(selectAuthModal, modal => modal.isLoading);
export const selectAuthModalIsLoading = createSelector(selectAuthModal, modal => modal.isLoading);
export const selectAuthModalIsVisible = createSelector(selectAuthModal, modal => modal.isVisible);

