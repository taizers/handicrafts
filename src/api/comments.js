import axios from 'axios';
import {API_URL} from "../constants";

export const getCommentsApi = async (token) => {
    return await axios.get( API_URL + "comments",
        { headers: { Authorization: `Bearer ${token}` }})
        .then(response => response.data)
};

export const deleteCommentApi = async (data) => {
    const { payload, token } = data;
    return await axios.delete(API_URL + "posts/" + payload.postId + "/comments/" + payload.commentId,
        { headers: { Authorization: `Bearer ${token}` }})
    .then(response => response.data)
};

export const editCommentApi = async (data) => {
    const { payload, token } = data;
    console.log(payload);
    return await axios.put(API_URL + "posts/" + payload.postId + "/comments/" + payload.commentId,
        { ...payload.comment },
        { headers: { Authorization: `Bearer ${token}` }})
    .then(response => response.data)
};

export const createCommentApi = async (data) => {
    const { payload, token } = data;
    return await axios.post(API_URL + "posts/" + payload.postId + "/comments",
        {...payload.comment},
        { headers: { Authorization: `Bearer ${token}` }})
    .then(response => response.data)
};
