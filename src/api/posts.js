import axios from 'axios';
import { API_URL } from "../constants";

export const getPostsApi = async () => {
    return await axios.get(API_URL + "posts/")
        .then(response => response.data)
};

export const getPostApi = async (id) => {
    return await axios.get(API_URL + "posts/" + id)
        .then(response => response.data)
};

export const getPostsFromTypeApi = async (type) => {
    return await axios.get(API_URL + "posts/?type=" + type)
        .then(response => response.data)
};

export const deletePostApi = async (id) => {
    return await axios.delete(API_URL + "posts/" + id)
        .then(response => response.data)
};

export const updatePostApi = async ({id, data}) => {
    return await axios.put(API_URL + "posts/" + id, data)
        .then(response => response.data)
};
