import {
    GET_POSTS,
    GET_POSTS_FAILED,
    GET_POSTS_SUCCESSED,
    GET_POSTS_FROM_TYPE,
    GET_POSTS_FROM_TYPE_SUCCESSED,
    GET_POST,
    GET_POST_SUCCESSED,
    SET_POSTS_LOADING,
    DELETE_POST,
    UPDATE_POST,
} from '../constants';

export const getPosts = () => ({
    type: GET_POSTS,
});

export const getPostsFromType = (type) => ({
    type: GET_POSTS_FROM_TYPE,
    payload: type,
});

export const getPost = (id) => ({
    type: GET_POST,
    payload: id,
});

export const deletePost = (id) => ({
    type: DELETE_POST,
    payload: id,
});

export const updatePost = (id, data) => ({
    type: UPDATE_POST,
    payload: {
        id: id,
        data: data,
    },
});

export const getPostsSuccessed = (data) => ({
    type: GET_POSTS_SUCCESSED,
    payload: data,
});

export const getPostsFromTypeSuccessed = (data) => ({
    type: GET_POSTS_FROM_TYPE_SUCCESSED,
    payload: data,
});

export const getPostSuccessed = (data) => ({
    type: GET_POST_SUCCESSED,
    payload: data,
});

export const getPostFailed = (data) => ({
    type: GET_POSTS_FAILED,
    payload: data,
});

export const setPostsLoading = (isLoading) => ({
    type: SET_POSTS_LOADING,
    payload: { isLoading },
});
