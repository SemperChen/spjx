import {call, put} from "redux-saga/effects";
import {fetchJSON} from '../utils/HttpUtil';
import {receiveFeedback} from "../actions/feedback";

export function* fetchFeedback(params) {
    try {
        const {feedbackUrl} = params;
        let feedbackData = yield call(fetchJSON, feedbackUrl);
        yield put(receiveFeedback(feedbackData))

    } catch (e) {
        console.warn('fetchFeedback:' + e.message)
    }

}
//
