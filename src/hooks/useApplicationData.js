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
  SET_USER_INFO
} from "../reducers/application";

export function useApplicationData() {
  const [state, dispatch] = useReducer(reducer,
    {
      // INIT STATE
      userInfo: {},
      userHostedEvents: {},
      userattendingEvents: {},
      allEvents: [],
      event: {},
      allBars: []
    }
  );

  const deleteEvent = (id, event) => {
    return axios.delete(`/api/events/${id}`, { event })
      .then(() => dispatch({ type: SET_EVENT, id, event }))
      .catch(() => "ERROR_DELETE");
  };

  const getEventById = (id) => {
    return axios.get(`/api/events/${id}`)
      .then((response) => dispatch({ type: SET_EVENT, id, response }))
      .catch(() => "ERROR_DELETE");
  };

  const getHostedEventsByUserID = (id) => {
    return axios.get(`/api/events/?user_id=${id}`)
      .then((response) => dispatch({ type: SET_HOSTED_EVENTS, id, response }))
      .catch(() => "ERROR_DELETE");
  };

  const getAllEvents = () => {
    return axios.get(`/api/events`)
      .then((response) => dispatch({ type: SET_ALL_EVENTS, response }))
      .catch(() => "ERROR_DELETE");
  };

  const getUserById = (id) => {
    return axios.get(`http://localhost:3000/api/users/${id}`)
      .then((response) => dispatch({ type: SET_USER_INFO, value: response.data[0] }))
      
      .catch(() => "ERROR_DELETE");
  };

  const updateProfile = (id, email, tagLine) => {

    return axios.put('/api/users/' + id, { email, tagLine })
      .then(response => {
        const userInfo = {
          response
        };
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
    getHostedEventsByUserID
  };
};
