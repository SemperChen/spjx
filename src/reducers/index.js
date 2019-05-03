import nav from './navReducers';
import {combineReducers} from "redux";
import content from './content';
import my from './my';
import spread from "./spread";
import login from "./login";

const AppReducer = combineReducers({
    nav,
    content,
    my,
    spread,
    login
});
export default AppReducer
