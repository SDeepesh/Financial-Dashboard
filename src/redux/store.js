import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import transactionReducer from './reducers/transactionReducer';

const rootReducer = combineReducers({
  user: userReducer,
  transactions: transactionReducer,
});

const store = createStore(rootReducer);

export default store;
