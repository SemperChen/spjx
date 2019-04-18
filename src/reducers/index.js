import nav from './navReducers';
import {combineReducers} from "redux";
import content from './content';
import my from './my';
import spread from "./spread";

const AppReducer = combineReducers({
    nav,
    content,
    my,
    spread
});
export default AppReducer
