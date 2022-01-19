import { GET_USER } from "../constants";

export const pushedData = (data) => ({
    type: GET_USER,
    payload: data,
});