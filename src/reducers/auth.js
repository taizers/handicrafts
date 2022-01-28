import { SET_SIGN_IN_LOADING, SIGN_IN_SUCCESSED, SIGN_IN_FAILED } from "../constants";

const initialState = {
    signedIn: false,
    loading: false,
    error: null,
    user: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESSED:
            return {
                ...state,
                user: action.payload,
                signedIn: true,
            };
        case SIGN_IN_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case SET_SIGN_IN_LOADING:
            return {
                ...state,
                loading: action.payload.isLoading,
            };
        default:
            return state;
    }
};

export { reducer };