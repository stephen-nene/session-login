// rootReducer.js

import { combineReducers } from 'redux';
import userReducer from './userReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer
  // more reducers here
});

export default rootReducer;