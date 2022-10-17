export const APP_TOGGLE_SIDE_BAR = 'APP_TOGGLE_SIDE_BAR';
export const APP_SET_HEADER_CLASS = 'APP_SET_HEADER_CLASS';

export const toggleSideBar = (payload) => {
  return { type: APP_TOGGLE_SIDE_BAR, payload: payload };
};

export const setAppHeaderClass = (payload) => {
  return { type: APP_SET_HEADER_CLASS, payload: payload };
};