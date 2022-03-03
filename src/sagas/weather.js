import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { getWeatherApi } from '../api/weather';

import { getWeatherSuccessed, getWeatherFailed, setWeatherLoading } from '../actions/weather';

import { GET_WEATHER } from '../constants';

function* watchGetWeather() {
    yield takeEvery(GET_WEATHER, getWeather);
}

function* getWeather({ payload }) {
    yield setWeatherLoading(true);
    try {
        const data = yield call(getWeatherApi, payload);
        yield put(getWeatherSuccessed(data));
    } catch (error) {
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
