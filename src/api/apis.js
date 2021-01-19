import fetchResource from "./apiWrapper";
import jwt_decode from "jwt-decode";
import { getCookie } from "components/globalFuncs";

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

export function refreshToken() {
  return fetchResource('token/refresh/', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({refresh: getCookie("refresh")})
    });
}

export function register(bodyContent) {
    return fetchResource('register/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyContent),
      });
}

export function getRoom(id) {
  return fetchResource(`accomodation/rooms/${id}/`, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
    },
  });
}

export function getRooms() {
  return fetchResource(`accomodation/rooms/`, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
    },
  });
}

export function getUserReservations(token) {
  return fetchResource(`accomodation/user_reservations/`, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    },
  });
}

export function getReservations(token) {
  return fetchResource(`accomodation/reservations/`, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    },
  });
}

export function getRoomReservationDates(roomID) {
  return fetchResource(`accomodation/reservation_dates/${roomID}/`, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
    },
  });
}

export function getReviews() {
  return fetchResource(`accomodation/reviews/`, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
    },
  });
}

export function addReview(bodyContent, token) {
  return fetchResource(`accomodation/reviews/`, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(bodyContent),
  });
}

export function addReservation(bodyContent, token) {
    bodyContent.userID = jwt_decode(token).user_id;
    return fetchResource(`accomodation/reservations/`, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(bodyContent),
    });
}
