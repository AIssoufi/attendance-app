import * as Actions from '../constants/auth.action-type';

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  isSignin: false,
  currentUser: {
    school: {
      start: "2018-09-09T00:00:00Z",
      end: "2019-07-01T00:00:00Z"
    },
    username: "adtest"
  }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.REQUEST_LOG_IN:
      return {
        ...state,
        isAuthenticating: true,
        isAuthenticated: false
      };
    case Actions.SUCCESSFUL_LOG_IN:
      return {
        isAuthenticating: false,
        isAuthenticated: true,
        currentUser: action.payload
      };
    case Actions.INVALIDATE_LOG_IN_REQUEST:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: false
      };
    case Actions.REQUEST_SIGN_IN:
      return {
        ...state,
        isSignin: true
      };
    case Actions.SUCCESSFUL_SIGN_IN:
      return {
        ...state,
        isSignin: false,
        isAuthenticated: true,
        currentUser: action.payload
      };
    case Actions.INVALIDATE_SIGN_IN_REQUEST:
      return {
        ...state,
        isSignin: false
      };
    default:
      return state;
  }
};

export default authReducer;