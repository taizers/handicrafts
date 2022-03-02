import {
    GET_WEATHER,
    GET_WEATHER_SUCCESSED,
    GET_WEATHER_FAILED,
    SET_WEATHER_LOADING,
} from '../constants';

export const getWeather = (location) => ({
    type: GET_WEATHER,
    payload: location,
});

export const getWeatherSuccessed = (weather, city) => ({
    type: GET_WEATHER_SUCCESSED,
    payload: {
        weather: weather,
        city: city,
    },
});

export const getWeatherFailed = (error) => ({
    type: GET_WEATHER_FAILED,
    payload: error,
});

export const setWeatherLoading = (isLoading) => ({
    type: SET_WEATHER_LOADING,
    payload: isLoading,
});
