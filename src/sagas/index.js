import {all} from "redux-saga/effects";
import {fetchContent} from './content';
import {REQUEST_CONTENT, REQUEST_FEEDBACK, REQUEST_LOGIN, REQUEST_SAVEVIEWERSCOUNT} from '../constants/ActionTypes';
import {takeLatestFetch} from '../utils/takeLatestFetch';
import {login} from "./login";
import {fetchSaveViewerCount} from "./saveViewerCount";
import {fetchFeedback} from "./feedback";

const rootSaga = function* root() {
    yield all([
        takeLatestFetch(REQUEST_CONTENT,fetchContent),
        takeLatestFetch(REQUEST_LOGIN,login),
        takeLatestFetch(REQUEST_SAVEVIEWERSCOUNT,fetchSaveViewerCount),
        takeLatestFetch(REQUEST_FEEDBACK,fetchFeedback),
    ])
};
export default rootSaga;
