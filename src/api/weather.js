import axios from 'axios';

export const getWeatherApi = async (payload) => {
    const { location, language} = payload
    const lang = language.slice(0,2) === 'fr' ? 'by' : language.slice(0,2);
    
    return await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${location[0]}&lon=${location[1]}&lang=${lang}&units=metric&appid=43dc5d16b1690e84e42b959f5d2c5ef0`)
        .then(response => ({
                city: response.data.city.name,
                description: response.data.list[0].weather[0].description,
                icon: response.data.list[0].weather[0].icon,
                temp: response.data.list[0].main.temp,
                date: response.data.list[0].dt,
            }
        ))
};
