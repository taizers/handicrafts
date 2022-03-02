import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { getWeatherApi, getCityName } from '../api/weather';

import { getWeatherSuccessed, getWeatherFailed, setWeatherLoading } from '../actions/weather';

import { GET_WEATHER } from '../constants';

let locations = [];
const getUserLocation = () => (navigator.geolocation ?
    navigator.geolocation.getCurrentPosition(
        (position) => [ position.coords.latitude, position.coords.longitude ]
    ) :
    [ 53.6884, 23.8258 ]
);

function* watchGetWeather() {
    yield takeEvery(GET_WEATHER, getWeather);
}

function* getWeather() {
    const location = yield getUserLocation();
    yield console.log(location);
    yield setWeatherLoading(true);
    try {
        const data = yield call(getWeatherApi, location);
        const city = yield call(getCityName, location);
        yield console.log(data, city);
        yield put(getWeatherSuccessed(data, city));
    } catch (error) {
        yield console.log(error);
        yield getWeatherFailed(error.message);
    } finally {
        yield setWeatherLoading(false);
    }
}

export default function* rootSaga() {
    yield all([
        fork(watchGetWeather),
    ]);
}