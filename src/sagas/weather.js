import { call, put, takeEvery, all, fork, select } from "redux-saga/effects";
import { getWeatherApi } from '../api/weather';

import { getWeatherSuccessed, getWeatherFailed, setWeatherLoading } from '../actions/weather';

import { GET_WEATHER } from '../constants';
import {selectLanguage} from "../selectors/language";
import toast from 'react-hot-toast';

function* watchGetWeather() {
    yield takeEvery(GET_WEATHER, getWeather);
}

function* getWeather({ payload }) {
    yield setWeatherLoading(true);
    try {
        const data = yield call(getWeatherApi, payload);
        yield put(getWeatherSuccessed(data));
    } catch (error) {
        yield toast.error(error.message);
    } finally {
        yield setWeatherLoading(false);
    }
}

export default function* rootSaga() {
    yield all([
        fork(watchGetWeather),
    ]);
}
