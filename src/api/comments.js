import axios from 'axios';

export const getCommentsApi = async (payload) => {
    return await axios.get("http://localhost:5000/comments/" + payload)
    .then(response => response.data)
};
