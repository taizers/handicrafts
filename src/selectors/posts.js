import { createSelector } from 'reselect';

const postsData = (store) => store.posts;

export const selectPosts = createSelector(postsData, posts => posts.allPosts);
export const selectPostsFromCurrentType = createSelector(postsData, posts => posts.postsFromCurrentType);
export const selectPost = createSelector(postsData, posts => posts.post);
export const selectPostsIsLoading = createSelector(postsData, posts => posts.isLoading);
export const selectPostsError = createSelector(postsData, posts => posts.error);