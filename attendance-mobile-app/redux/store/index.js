
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import RootReducer from '../reducers';

const loggerMiddleware = createLogger();

const PrimaryStore = createStore(
  RootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    //loggerMiddleware // neat middleware that logs actions
  )
);

export default PrimaryStore;
