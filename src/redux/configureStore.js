import { combineReducers, configureStore } from '@reduxjs/toolkit';
import houseReducer from './house/houses';
import userReducer from './users/users';
import reserveReducer from './reserves/reserves';

const rootReducer = combineReducers({
  houses: houseReducer,
  users: userReducer,
  reserves: reserveReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
