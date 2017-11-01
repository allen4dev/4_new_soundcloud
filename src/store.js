import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  )
);

export default store;
