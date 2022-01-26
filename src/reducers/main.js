import { SET_MAIN_PAGE_LOADING } from "../constants";

const initialState = {
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAIN_PAGE_LOADING:
            return {
                ...state,
                lading: action.payload,
            };
        default:
            return state;
    }
};

export { reducer };