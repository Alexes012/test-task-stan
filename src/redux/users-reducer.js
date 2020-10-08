import {userAPI} from "../api/api";

const SET_USERS = "SET_USERS";
const GET_CURRENT_USER = "GET_CURRENT_USER";
const DELETE_CLIENT = "DELETE_CLIENT";
const EDIT_CLIENT_CARD = "EDIT_CLIENT_CARD";
const ADD_NEW_CLIENT = "ADD_NEW_CLIENT";

let initialState = {
    clients: [],
    currentClient: null
};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, clients: [...action.clients]};
        }
        case GET_CURRENT_USER: {
            return {...state, currentClient: action.id};
        }
        case DELETE_CLIENT: {
            return {...state, clients: action.clients};
        }
        case EDIT_CLIENT_CARD: {
            return {
                ...state,
                currentClient: {...action.currentClient},
                clients: state.clients.map(el => el.id === action.currentClient.id ? {...el, ...action.currentClient} : el)
            };
        }
        case ADD_NEW_CLIENT: {
            return {...state, clients: [...state.clients, action.client]};
        }
        default:
            return state;
    }
};

export const setUsers = (clients) => ({type: SET_USERS, clients});
export const getCurrentClient = (id) => ({type: GET_CURRENT_USER, id});
export const deleteClient = (id) => ({type: DELETE_CLIENT, id});
export const editCurrentClientCard = (currentClient) => ({type: EDIT_CLIENT_CARD, currentClient});
export const createNewClient = (client) => ({type: ADD_NEW_CLIENT, client});


export const requestUsers = () => {
    return (dispatch) => {
        userAPI.getUsers()
            .then(response => {
                dispatch(setUsers(response.data.clients));
            });
    };
};

export const getCurrentUser = (id) => {
    return (dispatch, getState) => {
        let initialUser = getState().usersPage.clients.filter(cl => cl.id === id);
        dispatch(getCurrentClient(...initialUser));
        userAPI.getCurrentUser(id)
            .then(response => {
                dispatch(getCurrentClient(response.data.client));
            });
    };
};

export const deleteUser = (id) => {
    return (dispatch) => {
        userAPI.deleteCurrentClient(id)
            .then(response => {
                dispatch(deleteClient(response.data.clients));
            });
    };
};

export const editClientUser = (name, surname, age, phone) => {
    return (dispatch, getState) => {
        const id = getState().usersPage.currentClient.id;
        userAPI.editClientCard(name, surname, age, phone, id)
            .then(response => {
                dispatch(editCurrentClientCard(response.data.client));
            });
    };
};

export const addNewClientCard = (name, surname, age, phone) => {
    return (dispatch) => {
        userAPI.addNewClient(name, surname, age, phone)
            .then(response => {
                debugger
                dispatch(createNewClient(response.data.client));
            });
    };
};


export default UsersReducer;