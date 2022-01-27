import axios from 'axios';

export const getHandicraftsListApi = async () => {
    return await axios.get("http://localhost:5000/handicrafts/")
    .then(response => response.data)
};

export const getHandicraftApi = async (id) => {
    console.log(id);
    return await axios.get("http://localhost:5000/handicraft/" + id)
    .then(response => response.data)
};