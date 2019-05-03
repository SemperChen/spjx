import nav from './navReducers';
import {combineReducers} from "redux";
import content from './content';
import login from "./login";

const AppReducer = combineReducers({
    nav,
    content,
    login
});
export default AppReducer
