import axios from 'axios';

export const signIn = async (payload) => {
    return await axios.put("http://localhost:5000/login/", {...payload})
    .then(response => response.data)
};
