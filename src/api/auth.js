import axios from 'axios';
import { API_URL } from '../constants';

export const signIn = async (payload) => {
    return await axios.put(API_URL + "login/", {...payload})
    .then(response => response.data)
};

export const signUp = async (payload) => {
    return await axios.post( API_URL + "login/", {...payload})
    .then(response => response.data)
};

export const getUserApi = async ({token}) => {
    return await axios.get( API_URL + "user/", { headers: { Authorization: `Bearer ${token}` } })
    .then(response => response.data)
};

export const logOutApi = async () => {
    return await axios.post( API_URL + "logout/",)
    .then(response => response.data)
};
