import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";
import {createStore,combineReducers} from 'redux';
var store = createStore(combineReducers({counterR:counterReducer,todosR:todoReducer}));
export default store;