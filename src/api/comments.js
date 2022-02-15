import axios from 'axios';
import { API_URL } from "../constants";

export const getCommentsApi = async (payload) => {
    if (payload) {
        return await axios.get(API_URL + "comments/" + payload)
        .then(response => response.data)
    } else {
        return await axios.get( API_URL + "comments/")
        .then(response => response.data)
    }
    
};

export const deleteCommentApi = async (payload) => {
    return await axios.delete(API_URL + "comments/" + payload)
    .then(response => response.data)
};

export const editCommentApi = async (payload) => {
    const { id, comment } = payload
    return await axios.put(API_URL + "comments/" + id, { comment })
    .then(response => response.data)
};

export const createCommentApi = async (payload) => {
    return await axios.post(API_URL + "comments/",{payload})
    .then(response => response.data)
};
