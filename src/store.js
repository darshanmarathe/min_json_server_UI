import { createStore } from "redux";
import rootReducer  from './reducers/rootRed'

let store = createStore(rootReducer);

export default store;