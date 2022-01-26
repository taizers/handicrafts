import { SET_MAIN_PAGE_LOADING } from "../constants";

export const setMainPageLoading = (loading) => ({
    type: SET_MAIN_PAGE_LOADING,
    payload: loading,
});