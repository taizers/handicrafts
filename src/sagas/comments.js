import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { getCommentsApi, } from '../api/comments';
import { getCommentsSuccessed, getCommentsFailed,  } from '../actions/comments';
import { GET_COMMENTS } from '../constants';

function* watchGetComments() {
    yield takeEvery(GET_COMMENTS, getComments);
}

function* getComments({ payload }) {
    try {
        const comments = yield call(getCommentsApi, payload);

        yield put(getCommentsSuccessed(comments));
    } catch (error) {
        yield put(getCommentsFailed(error.message));
    }
}


export default function* rootSaga() {
    yield all([
      fork(watchGetComments),
    ]);
}
