/**
 * @author Semper
 */
import {call, put} from "redux-saga/effects";
import {receiveLogin} from "../actions/login";
import {REQUEST_NET_FAILED} from "../constants/constants";
import {fetchJSON} from "../utils/HttpUtil";

export function* login(params) {
    try {
        const {loginUrl, body} = params;
        const login = yield call(fetchJSON, loginUrl, body);
        yield put(receiveLogin(login))
    } catch (e) {
        yield put(receiveLogin(REQUEST_NET_FAILED));
        console.log('login:' + e.message)
    }
}
