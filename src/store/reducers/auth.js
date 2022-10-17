import {AUTH_SET_LOGGED_IN} from '../actions/auth';

const initialState = {
  isLoggedIn: false,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};

export default app;
