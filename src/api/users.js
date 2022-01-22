import axios from 'axios';

export const getUser = async (payload) => {
    return await axios.get(`http://localhost:5000/user/${payload}`)
    .then(response => response.data)
};
