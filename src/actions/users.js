import { GET_USER_REQUEST, GET_USER_SUCCESSED, GET_USER_FAILED } from "../constants";

export const getUserRequest = (data) => ({
    type: GET_USER_REQUEST,
    payload: data,
});

export const getUserSuccessed = (data) => ({
    type: GET_USER_SUCCESSED,
    payload: data,
});

export const getUserFailed = (data) => ({
    type: GET_USER_FAILED,
    payload: data,
});
