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

export function getRoomReservationDates(roomID) {
  return fetchResource(`accomodation/reservation_dates/${roomID}`, {
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

export function addReview(token) {
  return fetchResource(`accomodation/reviews/`, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    },
  });
}

// export function addReservation(token) {
//   return fetchResource(`accomodation/reviews/`, {
//     method: 'GET',
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}`,
//     },
//   });
// }