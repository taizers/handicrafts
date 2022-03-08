import { SET_LANGUAGE } from "../constants";
import { LOCALES } from "../locales/locales";

const initialState = {
    language: LOCALES.RUSSIAN,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload,
            };
        default:
            return state;
    }
};

export { reducer };