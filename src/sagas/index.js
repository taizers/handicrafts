import { all } from 'redux-saga/effects';

import handicraftSaga from './handicrafts';
import commentsSaga from './comments';
import authSaga from './auth';
import postsSaga from './posts';
import weatherSaga from './weather';

export default function* rootSaga() {
    yield all([
        handicraftSaga(),
        authSaga(),
        commentsSaga(),
        postsSaga(),
        weatherSaga(),
    ]);
}
  