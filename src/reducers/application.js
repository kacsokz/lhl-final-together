const SET_DAY = "SET_DAY";
const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_INTERVIEW = "SET_INTERVIEW";
const SET_EVENT = "SET_EVENT"
const SET_APP_DATA = "SET_APP_DATA"
const SET_USER_ID = "SET_USER_ID"
const SET_USER_EMAIL = "SET_USER_EMAIL"
const SET_USER_TAGLINE = "SET_USER_TAGLINE"


function reducer(state, action) {
  let userInfo
  switch (action.type) {
    case SET_USER_ID:
      return { ...state, userInfo:action.value }
    case SET_USER_EMAIL:
      userInfo = {
        id: state.userInfo.id,
        email: action.value,
        tagLine: state.userInfo.tagLine
      }
        // console.log(action.value)
      return { ...state, userInfo:userInfo }
    case SET_USER_TAGLINE:
        userInfo = {
          id: state.userInfo.id,
          email: state.userInfo.email,
          tagLine: action.value
        }
        // console.log(userInfo)
        return { ...state, userInfo:userInfo }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export { reducer, SET_USER_ID, SET_USER_EMAIL, SET_USER_TAGLINE };