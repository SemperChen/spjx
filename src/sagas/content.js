import {call, put} from "redux-saga/effects";
import {receiveContent} from '../actions/content';
import {fetchJSONByGET} from '../utils/HttpUtil';

export function* fetchContent(params) {
    try {
        const {contentUrl} = params;
        let contentData = yield call(fetchJSONByGET, contentUrl);
        yield put(receiveContent(contentData))

    } catch (e) {
        console.warn('fetchContent:' + e.message)
    }

}
//
