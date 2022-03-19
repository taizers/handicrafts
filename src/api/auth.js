import axios from 'axios';
import { API_URL } from '../constants';
import data from '../moki.json';
import { isEmpty, isUndefined } from 'lodash';

export const signIn = async (payload) => {
    return await axios.post(API_URL + "login", {...payload})
    .then(response => response.data)
};

export const signUp = async (payload) => {
    return await axios.post( API_URL + "register", {...payload})
    .then(response => response.data)
};

export const getUsersApi = async (token) => {
    return await axios.get( API_URL + "users", { headers: { Authorization: `Bearer ${token}` } })
        .then(response => response.data)
};

export const getUserApi = async (payload) => {
    const { id, token } = payload;
    return await axios.get( API_URL + "users/" + id, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => response.data)
};

export const createUserApi = async (data) => {
    console.log(data);
    const { payload, token } = data;
    return await axios.post( API_URL + "users", {...payload}, { headers: { Authorization: `Bearer ${token}` }})
    .then(response => response.data)
};

export const changeUserApi = async (data) => {
    console.log(data);
    const { payload, token } = data;
    const formData = new FormData();
    if (!isUndefined(payload.avatar)) {
        formData.append('avatar', payload.avatar);

        await axios.post( API_URL + 'user/avatar', formData, { headers: { Authorization: `Bearer ${token}` }})
            .then(response => response.data)
    }
    if (!isEmpty(payload.user)) {
        return await axios.put( API_URL + "user", {...payload.user}, { headers: { Authorization: `Bearer ${token}` }})
        .then(response => response.data)
    }
};

export const deleteUserApi = async (data) => {
    const { payload, token } = data;
    return await axios.delete( API_URL + "users/" + payload, { headers: { Authorization: `Bearer ${token}` } })
    .then(response => response.data)
};

export const logOutApi = async (token) => {
    // return await axios.post( API_URL + "logout", { headers: { Authorization: `Bearer ${token}` } })
    // .then(response => response.data)
};
