import nav from './navReducers';
import {combineReducers} from "redux";
import content from './content';
import login from "./login";
import saveViewersCount from "./saveViewersCount";
import feedback from "./feedback";

const AppReducer = combineReducers({
    nav,
    content,
    login,
    saveViewersCount,
    feedback
});
export default AppReducer
