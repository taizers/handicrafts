import { SIGN_IN, SIGN_IN_SUCCESSED, SIGN_IN_FAILED } from "../constants";

export const signInRequest = (data) => ({
    type: SIGN_IN,
    payload: data,
});

export const signInSuccessed = (data) => ({
    type: SIGN_IN_SUCCESSED,
    payload: data,
});

export const signInFailed = (data) => ({
    type: SIGN_IN_FAILED,
    payload: data,
});
