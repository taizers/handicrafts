import axios from 'axios';
import { API_URL } from '../constants';
import data from '../moki.json';

export const getFeatureActionsApi = async () => {
    return [data.posts[3], data.posts[4]];
    // return await axios.get(API_URL + "feature")
    //     .then(response => response.data)
};