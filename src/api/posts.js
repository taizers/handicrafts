import axios from 'axios';
import { API_URL } from "../constants";
import data from '../moki.json';
import { POSTS_TYPES } from '../constants';
import { findLast, map } from 'lodash';

export const getPostsApi = async ( payload ) => {
    if (payload) {
        return await axios.get(API_URL + "posts/?type=" + payload)
            .then(response => response.data)
    }else {
        return await axios.get(API_URL + "posts")
            .then(response => response.data)
    }
};

export const getPostApi = async (payload) => {
    return await axios.get(API_URL + "posts/" + payload)
        .then(response => response.data)
};

export const getPostsTypesApi = async () => {
    return await axios.get(API_URL + "types")
        .then(response => response.data)
};

export const deletePostApi = async (data) => {
    const { payload, token } = data;
    return await axios.delete(API_URL + "posts/" + payload, { headers: { Authorization: `Bearer ${token}` }})
        .then(response => response.data)
};

export const deletePostTypeApi = async (data) => {
    const { payload, token } = data;
    return await axios.delete(API_URL + "types/" + payload, { headers: { Authorization: `Bearer ${token}` }})
        .then(response => response.data)
};

export const createPostApi = async (data) => {
    const { payload, token } = data;
    const formData = new FormData();
    payload.links.forEach((item) => {
        formData.append('links[]', item);
    })
    payload.images.forEach((item) => {
        formData.append('images[]', item);
    })
    formData.append('content', payload.content);
    formData.append('title', payload.title);
    formData.append('subtitle', payload.subtitle);
    formData.append('latitude', payload.latitude);
    formData.append('longitude', payload.longitude);
    formData.append('date', payload.date);
    formData.append('type_id', payload.type_id);
    return await axios.post(API_URL + "posts", formData, { headers: { Authorization: `Bearer ${token}` }})
        .then(response => response.data)
};

export const createPostsTypeApi = async (data) => {
    const { payload, token } = data;
    const formData = new FormData();
    formData.append('image', payload.image);
    formData.append('label', payload.label);
    formData.append('value', payload.value);
    console.log(formData)
    return await axios.post(API_URL + "types", formData, { headers: { Authorization: `Bearer ${token}` }})
        .then(response => response.data)
};

export const getLatestsPostsApi = async () => {
    return await axios.get(API_URL + "posts")
        .then(response => response.data)
};

export const updatePostApi = async (data) => {
    const { payload, token } = data;
    return await axios.put(API_URL + "posts/" + payload.id, {...payload.data}, { headers: { Authorization: `Bearer ${token}` }})
        .then(response => response.data)
};
