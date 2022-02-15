import axios from 'axios';
import { API_URL } from "../constants";

export const getHandicraftsListApi = async () => {
    return await axios.get(API_URL + "handicrafts/")
    .then(response => response.data)
};

export const getHandicraftApi = async (id) => {
    return await axios.get(API_URL + "handicraft/" + id)
    .then(response => response.data)
};