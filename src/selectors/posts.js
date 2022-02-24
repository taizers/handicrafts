import { createSelector } from 'reselect';

const postsData = (store) => store.posts;

export const selectPosts = createSelector(postsData, posts => posts.posts);
export const selectPost = createSelector(postsData, posts => posts.post);
export const selectPostsIsLoading = createSelector(postsData, posts => posts.isLoading);
export const selectPostsError = createSelector(postsData, posts => posts.error);

const selectCreatePostModal = createSelector(postsData, posts => posts.modal)
export const selectCreateUserPostIsVisible = createSelector(selectCreatePostModal, modal => modal.isVisible);
export const selectCreateUserPostIsLoading = createSelector(selectCreatePostModal, modal => modal.isLoading);