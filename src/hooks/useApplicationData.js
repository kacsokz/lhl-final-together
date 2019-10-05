import axios from "axios";

import {
  useEffect,
  useReducer
}  from "react";

import reducer, {
  SET_EVENT,
  SET_APP_DATA
} from "../reducers/application";

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, 
    {
      // INIT STATE
    }
  );

  const deleteEvent = (id, event) => {
    return axios.delete(`/api/events/${id}`, {event})
      .then(() => dispatch({ type: SET_EVENT, id, event }))
      .catch(() => "ERROR_DELETE");
  };

  // sets state with data retrieved from db server
  useEffect(() => {
 
    // Fetching and setting initial state from scheduler-api
    Promise.all([
      axios.get("/api/users"),
      axios.get("/api/events"),
      axios.get("/api/bars")
    ])
    .then(all => {
      dispatch({ type: SET_APP_DATA });
    })
    .catch(err => {
      console.log(err.response.status);
      console.log(err.response.headers);
      console.log(err.response.data);
    });

  }, []);

  return { state, deleteEvent };
};
