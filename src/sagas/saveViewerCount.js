import {call, put} from "redux-saga/effects";
import {receiveViewersCount} from "../actions/saveViewersCount";
import {fetchJSON} from "../utils/HttpUtil";

export function* fetchSaveViewerCount(params) {
    try {
        const {saveViewersCountUrl, body} = params;
        let saveViewersCountData = yield call(fetchJSON, saveViewersCountUrl,body);
        yield put(receiveViewersCount(saveViewersCountData))

    } catch (e) {
        console.warn('fetchSaveViewerCount:' + e.message)
    }

}
//
