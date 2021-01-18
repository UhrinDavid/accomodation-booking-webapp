import jwt_decode from "jwt-decode";

export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

export function deleteCookie( name) {
    if( getCookie( name ) ) {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
    }
  }

export function loggedIn() {
    if (getCookie("refresh")) {
        if (new Date(jwt_decode(getCookie("refresh")).exp) < new Date()) {
            return true;
        }
    }
    return false;
}

export function admin() {
    if (getCookie("refresh")) {
        if (jwt_decode(getCookie("refresh")).isAdmin) {
            return true;
        }
    }
    return false;
}