import { GET_USER_REQUEST, GET_USER_SUCCESSED, GET_USER_FAILED } from "../constants";

const initialState = {
    signedIn: false,
    loading: false,
    error: null,
    user: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                lading: true,
            };
        case GET_USER_SUCCESSED:
            return {
                ...state,
                user: action.payload,
                lading: false,
            };
        case GET_USER_FAILED:
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