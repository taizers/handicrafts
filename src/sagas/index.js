import { all } from 'redux-saga/effects';

import handicraftSaga from './handicrafts';
import commentsSaga from './comments';
import authSaga from './auth';

export default function* rootSaga() {
    yield all([
        handicraftSaga(),
        authSaga(),
        commentsSaga(),
    ]);
}
  