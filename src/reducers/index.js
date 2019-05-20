import nav from './navReducers';
import {combineReducers} from "redux";
import content from './content';
import login from "./login";
import saveViewersCount from "./saveViewersCount";

const AppReducer = combineReducers({
    nav,
    content,
    login,
    saveViewersCount
});
export default AppReducer
