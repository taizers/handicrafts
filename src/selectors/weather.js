import { createSelector } from 'reselect';

const weatherData = (store) => store.weather;

export const selectWeather = createSelector(weatherData, weather => weather.weather);
export const selectWeatherCity = createSelector(weatherData, weather => weather.city);
export const selectWeatherLoading = createSelector(weatherData, weather => weather.isLoading);
export const selectWeatherError = createSelector(weatherData, weather => weather.error);
