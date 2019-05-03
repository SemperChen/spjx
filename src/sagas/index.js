import {all} from "redux-saga/effects";
import {fetchContent} from './content';
import {fetchMy} from './my';
import {REQUEST_CONTENT, REQUEST_LOGIN, REQUEST_MY, REQUEST_SPREAD} from '../constants/ActionTypes';
import {takeLatestFetch} from '../utils/takeLatestFetch';
import {fetchSpread} from "./spread";
import {login} from "./login";

const rootSaga = function* root() {
    yield all([
        takeLatestFetch(REQUEST_CONTENT,fetchContent),
        takeLatestFetch(REQUEST_MY,fetchMy),
        takeLatestFetch(REQUEST_SPREAD,fetchSpread),
        takeLatestFetch(REQUEST_LOGIN,login),

    ])
};
export default rootSaga;
