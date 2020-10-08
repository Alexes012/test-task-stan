import {applyMiddleware, combineReducers, createStore} from "redux";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import UsersReducer from "./users-reducer";


let reducers = combineReducers({
    auth: AuthReducer,
    usersPage: UsersReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;