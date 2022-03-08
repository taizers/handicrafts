import { SET_LANGUAGE } from "../constants";

export const setLanguage = (language) => {
    document.cookie = `locale=${language}`;

    return {
        type: SET_LANGUAGE,
        payload: language,
    }
};
