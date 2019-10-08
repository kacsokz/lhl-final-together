import axios from "axios";

import {
  useEffect,
  useReducer
} from "react";

import {
  reducer,
  SET_EVENT,
  SET_HOSTED_EVENTS,
  SET_ALL_EVENTS,
  SET_APP_DATA,
  SET_USER_INFO,
  SET_ATTENDING_EVENTS
} from "../reducers/application";

export function useApplicationData() {
  const [state, dispatch] = useReducer(reducer,
    {
      // INIT STATE
      userInfo: {},
      userHostedEvents: [],
      userattendingEvents: [],
      allEvents: [],
      event: {},
      allBars: []
    }
  );

  const deleteEvent = (id, event) => {
    return axios.delete(`http://localhost:3000/api/users/event/${id}`, { event })
      .then(() => dispatch({ type: SET_EVENT, value: event }))
      .catch(() => "ERROR_DELETE");
  };

  const getEventById = (id) => {
    return axios.get(`http://localhost:3000/api/events/${id}`)
      .then((response) => dispatch({ type: SET_EVENT, value: response.data }))
      .catch(() => "ERROR_DELETE");
  };

  const getHostedEventsByUserID = (id) => {
    return axios.get(`http://localhost:3000/api/events/?user_id=${id}`)
      .then((response) => dispatch({ type: SET_HOSTED_EVENTS, value: response.data }))
      .catch(() => "ERROR_DELETE");
  };

  const getAttendedEventsByUserID = (id) => {
    return axios.get(`http://localhost:3000/api/events/attend/${id}`)
      .then((response) => dispatch({ type: SET_ATTENDING_EVENTS, value: response.data }))
      .catch(() => "ERROR_DELETE");
  };

const saveNewEvent = (id, eventData) => {
  return axios.post(`http://localhost:3000/api//users/event/new/${id}`, { eventData })
    .then((response) => dispatch({ type: SET_ALL_EVENTS, response }))
    .catch(() => "ERROR_DELETE");
};

  const getAllEvents = () => {
    return axios.get(`http://localhost:3000/api/events`)
      .then((response) => dispatch({ type: SET_ALL_EVENTS, response }))
      .catch(() => "ERROR_DELETE");
  };

  const getUserById = (id) => {
    return axios.get(`http://localhost:3000/api/users/${id}`)
      .then((response) => dispatch({ type: SET_USER_INFO, value: response.data[0] }))
      
      .catch(() => "ERROR_DELETE");
  };

  const joinEvent = (user_id, event_id, bar_id) => {
    return axios.put(`http://localhost:3000/api/users/join/${user_id}`, { event_id, bar_id })
      .then((response) => dispatch({ type: SET_USER_INFO, value: response.data[0] }))
      
      .catch(() => "ERROR_DELETE");
  };

  const updateProfile = (id, email, tagLine) => {

    return axios.put(`http://localhost:3000/api/users/${id}`, { id, email, tagLine })
      .then(response => {
        const userInfo = {
          response
        };
        // console.log(response.data)
        dispatch({ type: SET_USER_INFO, value: userInfo });
      })

  }

  // sets state with data retrieved from db server
  useEffect(() => {

    // Fetching and setting initial state from scheduler-api
    Promise.all([
      axios.get("http://localhost:3000/api/users"),
      axios.get("http://localhost:3000/api/events/list"),
      axios.get("http://localhost:3000/api/bars")
    ])
      .then(all => {
        dispatch({
          type: SET_APP_DATA,
          value: {
            allEvents: all[1].data,
            allBars: all[2].data,
            // interviewers: all[2].data
          }
        });
      })
      .catch(err => {
        console.log(err.response.status);
        console.log(err.response.headers);
        console.log(err.response.data);
      });

  }, []);

  return {
    state,
    deleteEvent,
    getEventById,
    updateProfile,
    getUserById,
    getAllEvents,
    getHostedEventsByUserID,
    getAttendedEventsByUserID,
    joinEvent,
    saveNewEvent
  };
};
