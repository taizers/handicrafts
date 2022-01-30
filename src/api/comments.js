import axios from 'axios';

export const getCommentsApi = async (payload) => {
    return await axios.get("http://localhost:5000/comments/" + payload)
    .then(response => response.data)
};

export const deleteCommentApi = async (payload) => {
    return await axios.delete("http://localhost:5000/comments/" + payload)
    .then(response => response.data)
};

export const editCommentApi = async (payload) => {
    return await axios.put("http://localhost:5000/comments/" + payload)
    .then(response => response.data)
};

export const createCommentApi = async (payload) => {
    return await axios.post("http://localhost:5000/comments/",{payload})
    .then(response => response.data)
};
