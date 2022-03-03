import {
    GET_WEATHER,
    GET_WEATHER_SUCCESSED,
    GET_WEATHER_FAILED,
    SET_WEATHER_LOADING,
    GET_USER_LOCATION,
} from '../constants';

export const getWeather = (location) => ({
    type: GET_WEATHER,
    payload: location,
});

export const getWeatherSuccessed = (weather) => ({
    type: GET_WEATHER_SUCCESSED,
    payload: weather,
});

export const getWeatherFailed = (error) => ({
    type: GET_WEATHER_FAILED,
    payload: error,
});

export const getUserLocation = (location) => ({
    type: GET_USER_LOCATION,
    payload: location,
});

export const setWeatherLoading = (isLoading) => ({
    type: SET_WEATHER_LOADING,
    payload: isLoading,
});
