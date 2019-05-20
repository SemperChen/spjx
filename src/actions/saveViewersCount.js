/**
 * @author Semper
 */
import {
    RECEIVE_SAVEVIEWERSCOUNT,
    REQUEST_SAVEVIEWERSCOUNT
} from "../constants/ActionTypes";

export function requestViewersCount(saveViewersCountUrl,body) {
    return {
        type: REQUEST_SAVEVIEWERSCOUNT,
        saveViewersCountUrl,
        body
    };
}

export function receiveViewersCount(saveViewersCountData) {
    return {
        type: RECEIVE_SAVEVIEWERSCOUNT,
        saveViewersCountData,
    };
}
//所有内容的