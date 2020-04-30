import {storageName} from "./variables";

export const addLocalStorage = data =>{
    return localStorage.setItem(storageName, JSON.stringify({token:data.token}))
}

export const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem(storageName))
}

export const clearLocalStorage = () => {
    return localStorage.removeItem(storageName)
}

