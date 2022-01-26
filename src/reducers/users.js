import { SIGN_IN, SIGN_IN_SUCCESSED, SIGN_IN_FAILED } from "../constants";

const initialState = {
    signedIn: false,
    loading: false,
    error: null,
    user: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                lading: true,
            };
        case SIGN_IN_SUCCESSED:
            return {
                ...state,
                user: action.payload,
                lading: false,
                signedIn: true,
            };
        case SIGN_IN_FAILED:
            return {
                ...state,
                lading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export { reducer };