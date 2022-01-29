import { 
    SIGN_IN,
    SIGN_IN_SUCCESSED,
    SIGN_IN_FAILED,
    SET_SIGN_IN_LOADING,
    SIGN_UP,
    SIGN_UP_SUCCESSED,
    SIGN_UP_FAILED,
    CLEAR_USER,
} from "../constants";

export const signIn = (data) => ({
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

export const signUp = (data) => ({
    type: SIGN_UP,
    payload: data,
});

export const signUpSuccessed = (data) => ({
    type: SIGN_UP_SUCCESSED,
    payload: data,
});

export const signUpFailed = (data) => ({
    type: SIGN_UP_FAILED,
    payload: data,
});

export const clearUser = () => ({
    type: CLEAR_USER,
});

export const setSignInLoading = (isLoading) => ({
    type: SET_SIGN_IN_LOADING,
    payload: { isLoading },
});
