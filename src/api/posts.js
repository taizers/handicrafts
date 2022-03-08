import axios from 'axios';
import { API_URL } from "../constants";
import data from '../moki.json';
import { POSTS_TYPES } from '../constants';
import { findLast, map } from 'lodash';

export const getPostsApi = async ( type ) => {
    return data.posts;
/*    if (type) {
        return await axios.get(API_URL + "posts/?type=" + type)
            .then(response => response.data)
    }else {
        return await axios.get(API_URL + "posts/")
            .then(response => response.data)
    }
*/
};

export const getPostApi = async (id) => {
    return data.posts[0];
/*    return await axios.get(API_URL + "posts/" + id)
        .then(response => response.data)*/
};

export const getPostTypesApi = async () => {
    return POSTS_TYPES;
/*    return await axios.get(API_URL + "postsTypes/")
        .then(response => response.data)*/
};

export const deletePostApi = async (id) => {
    return await axios.delete(API_URL + "posts/" + id)
        .then(response => response.data)
};

export const createPostApi = async (post) => {
    return await axios.post(API_URL + "posts/", {post})
        .then(response => response.data)
};

export const getLatestsPostsApi = async () => {
    return data.posts.slice().splice(0,3);
 /*   return await axios.get(API_URL + "posts/latests")
        .then(response => response.data)*/
};

export const updatePostApi = async ({id, data}) => {
    return await axios.put(API_URL + "posts/" + id, data)
        .then(response => response.data)
};
