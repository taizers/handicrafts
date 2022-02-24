import axios from 'axios';
import { API_URL } from "../constants";
import data from '../moki.json';
import { findLast, map } from 'lodash';

export const getPostsApi = async ( type ) => {
    console.log(data.posts);
    return data.posts;
/*    if (type) {
        return await axios.get(API_URL + "posts/?type=" + type)
            .then(response => response.data)
    }else {
        return await axios.get(API_URL + "posts/")
            .then(response => response.data)
    }
/*    return await axios.get(API_URL + "posts/")
        .then(response => response.data)*/
};

export const getPostApi = async (id) => {
    return data.posts[0];
/*    return await axios.get(API_URL + "posts/" + id)
        .then(response => response.data)*/
};

export const getPostsFromTypeApi = async (type) => {
    console.log(map(data.posts, post => {
        if (post.type === type) {
            return post
        }
    }));
    return map(data.posts, post => {
        if (post.type === type) {
            return post
        }
    });
/*    return await axios.get(API_URL + "posts/?type=" + type)
        .then(response => response.data)*/
};

export const deletePostApi = async (id) => {
    return await axios.delete(API_URL + "posts/" + id)
        .then(response => response.data)
};

export const updatePostApi = async ({id, data}) => {
    return await axios.put(API_URL + "posts/" + id, data)
        .then(response => response.data)
};
