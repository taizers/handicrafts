import {
    SET_AUTH_LOADING,
    AUTH_FAILED,
    LOG_OUT,
    AUTH_SUCCESSED,
} from "../constants";

const initialState = {
    signedIn: false,
    isLoading: false,
    error: null,
    user: {},
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
        default:
            return state;
    }
};

export { reducer };
