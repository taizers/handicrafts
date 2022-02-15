import { 
    SIGN_IN,
    AUTH_SUCCESSED,
    AUTH_FAILED,
    SET_SIGN_IN_LOADING,
    SIGN_UP,
    LOG_OUT,
    GET_USER,
} from "../constants";

export const signIn = (data) => ({
    type: SIGN_IN,
    payload: data,
});

export const getUser = (accessToken) => ({
    type: GET_USER,
    payload: accessToken,
});

export const signUp = (data) => ({
    type: SIGN_UP,
    payload: data,
});

export const authFailed = (data) => ({
    type: AUTH_FAILED,
    payload: data,
});

export const authSuccessed = (user) => ({
    type: AUTH_SUCCESSED,
    payload: user,
});

export const logOut = () => ({
    type: LOG_OUT,
});

export const setAuthLoading = (isLoading) => ({
    type: SET_SIGN_IN_LOADING,
    payload: { isLoading },
});
