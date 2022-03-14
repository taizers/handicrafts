import { deleteCookie } from "../utils";

import {
    SET_AUTH_LOADING,
    AUTH_FAILED,
    LOG_OUT,
    AUTH_SUCCESSED,
    GET_USERS_SUCCESSED,
    SET_CREATE_MODAL_VISIBLE,
    SET_CREATE_MODAL_LOADING,
    GET_USER,
    GET_USER_PROFILE_SUCCESSED,
    GET_USER_SUCCESSED, GET_TOKEN, SET_CHANGE_PROFILE_LOADING, SET_CHANGE_PROFILE_VISIBLE,
} from "../constants";

const initialState = {
    token: null,
    isLoading: false,
    error: null,
    user: null,
    authUser: null,
    users: null,
    modal: {
        isVisible: false,
        isLoading: false,
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case SET_AUTH_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };
        case LOG_OUT:
            deleteCookie('token');
            deleteCookie('userId');
            return {
                ...state,
                token: null,
                authUser: null,
            };
        case AUTH_SUCCESSED:
            return {
                ...state,
                authUser: action.payload.user,
                token: action.payload.token,
            };
        case GET_USERS_SUCCESSED:
            return {
                ...state,
                users: action.payload,
            };
        case GET_USER_SUCCESSED:
            return {
                ...state,
                authUser: action.payload.user,
                token: action.payload.token,
            };
        case GET_USER_PROFILE_SUCCESSED:
            return {
                ...state,
                user: action.payload,
            };
        case SET_CREATE_MODAL_LOADING:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    isLoading: action.payload,
                },
            };
        case SET_CREATE_MODAL_VISIBLE:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    isVisible: action.payload,
                },
            };
        case SET_CHANGE_PROFILE_LOADING:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    isLoading: action.payload,
                },
            };
        case SET_CHANGE_PROFILE_VISIBLE:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    isVisible: action.payload,
                },
            };
        default:
            return state;
    }
};

export { reducer };
