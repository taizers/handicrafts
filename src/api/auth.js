import axios from 'axios';
import { API_URL } from '../constants';
import data from '../moki.json';

export const signIn = async (payload) => {
    return await axios.put(API_URL + "login/", {...payload})
    .then(response => response.data)
};

export const signUp = async (payload) => {
    return await axios.post( API_URL + "login/", {...payload})
    .then(response => response.data)
};

export const getUsersApi = async () => {
    return data.users
/*    return await axios.get( API_URL + "user/",)
        .then(response => response.data)*/
};

export const getUserApi = async (id) => {
    return data.users[id];
/*    return await axios.get( API_URL + "user/", { headers: { Authorization: `Bearer ${token}` } })
        .then(response => response.data)*/
};

export const createUserApi = async ({ user }) => {
    return await axios.post( API_URL + "user/", user)
    .then(response => response.data)
};

export const deleteUserApi = async ({ id }) => {
    return await axios.delete( API_URL + "user/" + id)
    .then(response => response.data)
};

export const logOutApi = async ({ token }) => {
    return await axios.post( API_URL + "logout/", { headers: { Authorization: `Bearer ${token}` } })
    .then(response => response.data)
};
