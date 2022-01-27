import { all } from 'redux-saga/effects';

import handicraftSaga from './handicrafts';
import authSaga from './auth';

export default function* rootSaga() {
    yield all([
        handicraftSaga(),
        authSaga(),
    ]);
}
  