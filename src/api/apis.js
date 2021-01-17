import fetchResource from "./apiWrapper";

export function signIn(username, password) {
    return fetchResource('token/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: {
          username,
          password,
        },
      });
}

export function register(bodyContent) {
    return fetchResource('register/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: bodyContent,
      });
}