import { createSelector } from 'reselect';

const comments = (store) => store.comments;

export const selectComments = createSelector(comments, comment => comment.comments);
