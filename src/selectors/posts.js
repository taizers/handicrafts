import { createSelector } from 'reselect';

const postsData = (store) => store.posts;

export const selectPosts = createSelector(postsData, posts => posts.posts);
export const selectPost = createSelector(postsData, posts => posts.post);
export const selectPostsIsLoading = createSelector(postsData, posts => posts.isLoading);
export const selectPostsError = createSelector(postsData, posts => posts.error);
export const selectPostsTypes = createSelector(postsData, posts => posts.types);

const selectLatests = createSelector(postsData, posts => posts.latests);
export const selectLatestsPosts = createSelector(selectLatests, latests => latests.posts);
export const selectLatestsError = createSelector(selectLatests, latests => latests.error);
export const selectLatestsLoading = createSelector(selectLatests, latests => latests.isLoading);

const selectCreatePostModal = createSelector(postsData, posts => posts.modal)
export const selectCreatePostIsVisible = createSelector(selectCreatePostModal, modal => modal.isVisible);
export const selectCreatePostIsLoading = createSelector(selectCreatePostModal, modal => modal.isLoading);
