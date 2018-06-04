import thunk from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';

import logger from './logger';

const composeEnhancers = process.env.NODE_ENV === 'production'
  ? compose
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default composeEnhancers(
  applyMiddleware(
    thunk,
    logger
  )
);
