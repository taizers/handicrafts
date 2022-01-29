import { 
    SET_SIGN_IN_LOADING,
    SIGN_IN_SUCCESSED,
    SIGN_IN_FAILED,
    SIGN_UP_SUCCESSED,
    SIGN_UP_FAILED,
    CLEAR_USER,
} from "../constants";

const initialState = {
    signedIn: false,
    loading: false,
    error: null,
    user: {},
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
        case SIGN_UP_SUCCESSED:
            return {
                ...state,
                user: action.payload,
                signedIn: true,
            };
        case SIGN_UP_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case CLEAR_USER:
            return {
                ...state,
                signedIn: false,
                user: null,
            };
        default:
            return state;
    }
};

export { reducer };
