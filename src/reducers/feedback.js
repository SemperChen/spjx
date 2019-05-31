/**
 * @author Semper
 */
import {RECEIVE_FEEDBACK, REQUEST_FEEDBACK} from "../constants/ActionTypes";

const initialState = {
    isFetching: false
};
export default function feedback(state = initialState, action) {
    switch (action.type) {
        case REQUEST_FEEDBACK:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_FEEDBACK:
            return {
                ...state,
                feedback: action.feedbackData,
                isFetching: false
            };
        default:
            return state;
    }
}
