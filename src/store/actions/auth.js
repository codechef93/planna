export const AUTH_SET_LOGGED_IN = 'AUTH_SET_LOGGED_IN'

export const setAsLoggedIn = () => async (dispatch) => {
  return new Promise((resolve, reject) => {
    try {
      dispatch({
        type: AUTH_SET_LOGGED_IN,
        payload: true
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

