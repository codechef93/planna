import { combineReducers } from 'redux';
// import reducers
import auth from './auth';
import app from './app';
import pro from './pro';
import booking from './booking';

export default combineReducers({
  auth, app, pro, booking
});
