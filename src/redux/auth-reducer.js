import {authAPI} from "../api/api";
import Cookies from "js-cookie";

const SET_USER_DATA = "SET_USER_DATA";
const IS_AUTH = "IS_AUTH";
const ERROR_MESSAGE = "ERROR_MESSAGE";


let initialState = {
    id: null,
    login: null,
    isAuth: false,
    error: null
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR_MESSAGE:
        case IS_AUTH:
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const setAuthUserData = (id, login) => ({
    type: SET_USER_DATA,
    payload: {id, login}
});
export const setIsAuth = (isAuth) => ({
    type: IS_AUTH,
    payload: {isAuth}
});

export const errorMessage = (error) => ({
    type: ERROR_MESSAGE,
    payload: {error}
});


export const login = (login, password) => (dispatch) => {
    authAPI.login(login, password)
        .then(response => {
            Cookies.set("token", response.data.token);
            let {id, login} = response.data;
            dispatch(setAuthUserData(id, login));
            dispatch(setIsAuth(true));
        }).catch(() => {
            debugger
            dispatch(errorMessage("Неверный логин или пароль"))});
};


export const logOut = () => (dispatch) => {
    Cookies.remove("token");
    dispatch(setAuthUserData(null, null));
    dispatch(setIsAuth(false));
};


export default AuthReducer;