import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';
import userReducer from './userReducer';
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  info: cardsReducer,
  user: userReducer,
  userSession: authReducer,
});

export default rootReducer;

