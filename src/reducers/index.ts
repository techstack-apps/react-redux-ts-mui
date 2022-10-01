import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import feedReducer from './feeds';
import authReducer from './auth';

const rootReducer = combineReducers({
  feeds: feedReducer,
  auth: authReducer
});

const middleware = applyMiddleware(thunk)

export type RootState = ReturnType<typeof rootReducer>;
export default createStore(rootReducer, middleware);