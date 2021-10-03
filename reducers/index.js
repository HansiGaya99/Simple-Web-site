import counterReducer from "./counter";
import loggedReducer from "./isLogged";

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
//import storage from "redux-persist/lib/storage";
import storage from "redux-persist/es/storage/session";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['counter','isLogged']
}

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer 
});


export default persistReducer(persistConfig, allReducers);