import jwt_decode from "jwt-decode";

export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

export function loggedIn() {
    if (getCookie("refresh")) {
        if (new Date(jwt_decode(getCookie("refresh")).exp) < new Date()) {
            return true;
        }
    }
    return false;
}