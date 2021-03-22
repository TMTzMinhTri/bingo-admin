import Cookies from "js-cookie";


export function setCookies (key, value) {
    return Cookies.set(key, value)
}

export function readCookies(key) {
    return Cookies.getJSON(key)
}