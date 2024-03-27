import {combineReducers, legacy_createStore as createStore} from "redux";
import {contentReducer} from "./contentReducer";
import {sidebarReducer} from "./sidebarReducer";

let reducers = combineReducers({
    contentPage: contentReducer,
    sidebarPage: sidebarReducer
});

let store = createStore(reducers);

export default store;