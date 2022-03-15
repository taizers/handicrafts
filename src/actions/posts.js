import {
    GET_POSTS,
    GET_POSTS_FAILED,
    GET_POSTS_SUCCESSED,
    CREATE_POST,
    CREATE_POST_SUCCESSED,
    GET_POST,
    GET_POST_SUCCESSED,
    SET_POSTS_LOADING,
    DELETE_POST,
    UPDATE_POST,
    SET_CREATE_POST_VISIBLE,
    SET_CREATE_POST_LOADING,
    GET_LATESTS_POSTS,
    GET_LATESTS_POSTS_FAILED,
    GET_LATESTS_POSTS_SUCCESSED,
    SET_LATESTS_POSTS_LOADING,
    GET_POSTS_TYPES,
    GET_POSTS_TYPES_SUCCESSED, CREATE_POSTS_TYPE,
    GET_WIDGETS_POSTS, DELETE_POST_TYPE, DELETE_POST_TYPE_SUCCESSED,
} from '../constants';

export const getPostsTypes = () => ({
    type: GET_POSTS_TYPES,
});

export const getWidgetsPosts = () => ({
    type: GET_WIDGETS_POSTS,
});

export const getPostsTypesSuccessed = (types) => ({
    type: GET_POSTS_TYPES_SUCCESSED,
    payload: types,
});

export const getPosts = (type) => ({
    type: GET_POSTS,
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

export const createPost = (post) => ({
    type: CREATE_POST,
    payload: post,
});

export const createPostsType = (type) => ({
    type: CREATE_POSTS_TYPE,
    payload: type,
});

export const createPostSuccessed = (data) => ({
    type: CREATE_POST_SUCCESSED,
    payload: data,
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

export const getPostSuccessed = (data) => ({
    type: GET_POST_SUCCESSED,
    payload: data,
});

export const getPostFailed = (data) => ({
    type: GET_POSTS_FAILED,
    payload: data,
});

export const deletePostType = (id) => ({
    type: DELETE_POST_TYPE,
    payload: id,
});

export const deletePostTypeSuccessed = (data) => ({
    type: DELETE_POST_TYPE_SUCCESSED,
    payload: data,
});

export const getLatestsPosts = () => ({
    type: GET_LATESTS_POSTS,
});

export const getLatestsPostsSuccessed = (posts) => ({
    type: GET_LATESTS_POSTS_SUCCESSED,
    payload: posts,
});

export const getLatestsPostsFailed = (error) => ({
    type: GET_LATESTS_POSTS_FAILED,
    payload: error,
});

export const setLatestsPostsLoading = (isLoading) => ({
    type: SET_LATESTS_POSTS_LOADING,
    payload: isLoading,
});

export const setPostsLoading = (isLoading) => ({
    type: SET_POSTS_LOADING,
    payload: isLoading,
});

export const setCreatePostVisible = (isVisible) => ({
    type: SET_CREATE_POST_VISIBLE,
    payload: isVisible,
});

export const setCreatePostLoading = (isLoading) => ({
    type: SET_CREATE_POST_LOADING,
    payload: isLoading,
});
