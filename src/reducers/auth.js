import {
    SET_AUTH_LOADING,
    AUTH_FAILED,
    LOG_OUT,
    AUTH_SUCCESSED,
    GET_USERS_SUCCESSED,
    SET_CREATE_MODAL_VISIBLE,
    SET_CREATE_MODAL_LOADING,
} from "../constants";

const initialState = {
    signedIn: false,
    isLoading: false,
    error: null,
    user: null,
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
            return {
                ...state,
                signedIn: false,
                user: null,
            };
        case AUTH_SUCCESSED:
            return {
                ...state,
                user: action.payload,
                signedIn: true,
            };
        case GET_USERS_SUCCESSED:
            return {
                ...state,
                users: action.payload,
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
        default:
            return state;
    }
};

export { reducer };
