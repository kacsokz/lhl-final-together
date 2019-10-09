import axios from "axios";
import config from '../config';

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

  const deleteEvent = (event_id) => {
    return axios.delete(`${config.API_PATH}/api/users/event/${event_id}`)
      // .then(() => dispatch({ type: SET_EVENT, value: event }))
      .catch(() => "ERROR_DELETE");
  };

  const getEventById = (id) => {
    return axios.get(`${config.API_PATH}/api/events/${id}`)
      .then((response) => dispatch({ type: SET_EVENT, value: response.data }))
      .catch(() => "ERROR_DELETE");
  };

  const getHostedEventsByUserID = (id) => {
    return axios.get(`${config.API_PATH}/api/events/?user_id=${id}`)
      .then((response) => dispatch({ type: SET_HOSTED_EVENTS, value: response.data }))
      .catch(() => "ERROR_DELETE");
  };

  const getAttendedEventsByUserID = (id) => {
    return axios.get(`${config.API_PATH}/api/events/attend/${id}`)
      .then((response) => dispatch({ type: SET_ATTENDING_EVENTS, value: response.data }))
      .catch(() => "ERROR_DELETE");
  };

const saveNewEvent = (id, date, start, end, bar_id, name, tag) => {
  return axios.put(`${config.API_PATH}/api//users/event/new/${id}`, { id, date, start, end, bar_id, name, tag })
  
    .then((response) => console.log(id, date, start, end, bar_id, name, tag))
    .catch(() => "ERROR_DELETE");
};

  const getAllEvents = () => {
    return axios.get(`${config.API_PATH}/api/events/list`)
      .then((response) => dispatch({ type: SET_ALL_EVENTS, response }))
      .catch(() => "ERROR_DELETE");
  };

  const getUserById = (id) => {
    // console.log(id)
    return axios.get(`${config.API_PATH}/api/users/${id}`)
      .then((response) => dispatch({ type: SET_USER_INFO, value: response.data[0] }))
      
      .catch(() => "ERROR_DELETE");
  };

  const joinEvent = (user_id, event_id, bar_id) => {
    return axios.put(`${config.API_PATH}/api/users/join/${user_id}`, { event_id, bar_id })
      .then((response) => dispatch({ type: SET_USER_INFO, value: response.data[0] }))
      
      .catch(() => "ERROR_DELETE");
  };

  const updateProfile = (id, email, tagLine) => {

    return axios.put(`${config.API_PATH}/api/users/${id}`, { id, email, tagLine })
      .then(response => {
        const userInfo = response.data[0];
        console.log(response.data)
        dispatch({ type: SET_USER_INFO, value: userInfo });
      })

      

  }

  // sets state with data retrieved from db server
  useEffect(() => {
    // Fetching and setting initial state from scheduler-api
    Promise.all([
      axios.get(`${config.API_PATH}/api/users`),
      axios.get(`${config.API_PATH}/api/events/list`),
      axios.get(`${config.API_PATH}/api/bars`)
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
        // console.log(err.response.status);
        // console.log(err.response.headers);
        // console.log(err.response.data);
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
