// store.js

import { createStore, combineReducers } from 'redux';
import Reducer from './reducers';

const rootReducer = combineReducers({
  user: Reducer,
  // Add other reducers here if needed
});

const store = createStore(rootReducer);

export default store;
