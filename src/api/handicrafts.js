import axios from 'axios';

export const getHandicraftsList = async () => {
    return await axios.get("http://localhost:5000/handicrafts/")
    .then(response => response.data)
};