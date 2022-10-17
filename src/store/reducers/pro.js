import { PRO_SET_LOADING, PRO_SET_PROFILE_DATA, PRO_SET_SERVICES, PRO_SET_CUR_SERVICE } from '../actions/pro';

const initialState = {
  isLoading: false,
  proData: {},
  services: [],
  curService : null
};

const pro = (state = initialState, action) => {
  switch (action.type) {
    case PRO_SET_LOADING:
      return { ...state, isLoading: action.payload || false };
    case PRO_SET_PROFILE_DATA:
      return { ...state, proData: action.payload || {} };
    case PRO_SET_SERVICES:
      return { ...state, services: action.payload || {} };
    case PRO_SET_CUR_SERVICE:
      return { ...state, curService: action.payload || {} };
    default:
      return state;
  }
};

export default pro;
