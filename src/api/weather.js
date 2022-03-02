import axios from 'axios';

export const getWeatherApi = async (location) => {
    return await axios.get(`https://weatherapi-com.p.rapidapi.com/current.json?q=${location[0]}%2C${location[1]}"`, {
            "headers": {
                "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
                "x-rapidapi-key": "fbcb647a0amshe1bbdfa4d57c8f4p128024jsn77a122409d00"
            }
        }
    )
        .then(response => response.data.current)
};

export const getCityName = async (location) => {
    return await axios.get(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?location=%2B${location[0]}%2B${location[1]}&limit=1&languageCode=ru`, {
        "headers": {
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
            "x-rapidapi-key": "fbcb647a0amshe1bbdfa4d57c8f4p128024jsn77a122409d00"
        }
    }
    )
        .then(response => response.data.data[0].city)
};