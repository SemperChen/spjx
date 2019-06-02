/**
 * @author Semper
 */
import {RECEIVE_CONTENT, RECEIVE_FEEDBACK, REQUEST_CONTENT, REQUEST_FEEDBACK} from "../constants/ActionTypes";

export function requestFeedback(feedbackUrl,body) {
    return {
        type: REQUEST_FEEDBACK,
        feedbackUrl,
        body
    };
}

export function receiveFeedback(feedbackData) {
    return {
        type: RECEIVE_FEEDBACK,
        feedbackData,
    };
}
//所有内容的