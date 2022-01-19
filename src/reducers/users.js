import { GET_USER } from "../constants";

const initialState = {
    loading: false,
    error: null,
    users: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                lading: true,
                error: null,
            };
        default:
            return state;
    }
};

export { reducer };