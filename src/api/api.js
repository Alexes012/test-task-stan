
import Cookies from'js-cookie'
import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3333/',
    headers: {
        Authorization: `${Cookies.get('token')}`
    }
});

export const authAPI = {
    login(login, password) {
        return instance.post(`user/login`, {login, password})
    }
};

export const userAPI = {
    getUsers() {
        return instance.get(`clients`)
    },
    getCurrentUser (id) {
        return instance.post(`clients/get`, {id})
    },
    deleteCurrentClient (id) {
        return instance.delete(`clients/remove`, {id})
    },
    editClientCard (name, surname, age, phone, id) {
        return instance.put(`clients/edit`, {name, surname, age, phone, id})
    },
    addNewClient (name, surname, age, phone) {
        debugger
        return instance.post(`clients/add`, {name, surname, age, phone})
    }
};

