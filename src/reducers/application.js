const SET_EVENT = "SET_EVENT"
const SET_APP_DATA = "SET_APP_DATA"
const SET_USER_ID = "SET_USER_ID"
const SET_USER_EMAIL = "SET_USER_EMAIL"
const SET_USER_TAGLINE = "SET_USER_TAGLINE"
const SET_USER_INFO = "SET_USER_INFO"
const SET_ALL_EVENTS = 'SET_ALL_EVENTS'
const SET_HOSTED_EVENTS = 'SET_HOSTED_EVENTS'
const SET_BARS_LOCATIONS = 'SET_BARS_LOCATIONS'
const SET_ATTENDING_EVENTS = 'SET_ATTENDING_EVENTS'
const SET_NEW_EVENT = 'SET_NEW_EVENT'

function reducer(state, action) {
  let userInfo
  switch (action.type) {
    case SET_USER_ID:
      return { ...state, userInfo: action.value }
    case SET_USER_EMAIL:
      userInfo = {
        id: state.userInfo.id,
        email: action.value,
        tagLine: state.userInfo.tagLine
      }
      return { ...state, userInfo: userInfo }
    case SET_USER_TAGLINE:
      userInfo = {
        id: state.userInfo.id,
        email: state.userInfo.email,
        tagLine: action.value
      }
      return { ...state, userInfo: userInfo }

    case SET_APP_DATA:
      return {
        ...state,
        allEvents: action.value.allEvents,
        allBars: action.value.allBars
      }
    case SET_USER_INFO:
      return { ...state, userInfo: { ...action.value } }

      case SET_EVENT:

      return { ...state, event: action.value }

      case SET_HOSTED_EVENTS:

      return {
        ...state, userHostedEvents: action.value
      }

      case SET_ATTENDING_EVENTS:
      return {
        
        ...state, userattendingEvents: action.value
      }
      
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export {
  reducer,
  SET_USER_ID,
  SET_USER_EMAIL,
  SET_USER_TAGLINE,
  SET_EVENT,
  SET_USER_INFO,
  SET_HOSTED_EVENTS,
  SET_ALL_EVENTS,
  SET_APP_DATA,
  SET_BARS_LOCATIONS,
  SET_ATTENDING_EVENTS
};