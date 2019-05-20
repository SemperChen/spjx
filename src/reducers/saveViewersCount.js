/**
 * @author Semper
 */
import {RECEIVE_SAVEVIEWERSCOUNT, REQUEST_SAVEVIEWERSCOUNT} from "../constants/ActionTypes";

const initialState = {
    isFetching: false
};

export default function saveViewersCount(state = initialState, action) {
    switch (action.type) {
        case REQUEST_SAVEVIEWERSCOUNT:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_SAVEVIEWERSCOUNT:
            return {
                ...state,
                saveViewersCountData: action.saveViewersCountData,
                isFetching: false
            };
        default:
            return state;
    }
}
