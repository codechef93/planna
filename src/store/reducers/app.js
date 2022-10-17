import {APP_SET_HEADER_CLASS, APP_TOGGLE_SIDE_BAR} from '../actions/app';

const initialState = {
  isSidebarOpened: false,
  headerClass: '',
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case APP_TOGGLE_SIDE_BAR:
      return { ...state, isSidebarOpened: !state.isSidebarOpened };
    case APP_SET_HEADER_CLASS:
      return { ...state, headerClass: action.payload || false };
    default:
      return state;
  }
};

export default app;
