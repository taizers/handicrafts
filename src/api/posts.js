import axios from 'axios';

export const getPostsApi = async () => {
    return await axios.get("http://localhost:5000/posts/")
        .then(response => response.data)
};

export const getPostApi = async (id) => {
    return await axios.get("http://localhost:5000/posts/" + id)
        .then(response => response.data)
};

export const getPostsFromTypeApi = async (type) => {
    return await axios.get("http://localhost:5000/posts/?type=" + type)
        .then(response => response.data)
};

export const deletePostApi = async (id) => {
    return await axios.delete("http://localhost:5000/posts/" + id)
        .then(response => response.data)
};

export const updatePostApi = async ({id, data}) => {
    return await axios.put("http://localhost:5000/posts/" + id, data)
        .then(response => response.data)
};
