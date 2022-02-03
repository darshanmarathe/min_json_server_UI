import { combineReducers } from "redux";
import setUser from "./allReducers";
import { authoriseUser } from "./allReducers";

const rootReducer = combineReducers({
    setUser,
    authoriseUser
})

export default rootReducer;