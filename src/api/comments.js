import axios from 'axios';

export const getCommentsApi = async (payload) => {
    if (payload) {
        return await axios.get("http://localhost:5000/comments/" + payload)
        .then(response => response.data)
    } else {
        return await axios.get("http://localhost:5000/comments/")
        .then(response => response.data)
    }
    
};

export const deleteCommentApi = async (payload) => {
    return await axios.delete("http://localhost:5000/comments/" + payload)
    .then(response => response.data)
};

export const editCommentApi = async (payload) => {
    const { id, comment } = payload
    return await axios.put("http://localhost:5000/comments/" + id, { comment })
    .then(response => response.data)
};

export const createCommentApi = async (payload) => {
    console.log(payload);
    return await axios.post("http://localhost:5000/comments/",{payload})
    .then(response => response.data)
};
