import { createStore, compose } from 'redux';
import DevTools from 'containers/DevTools';

export default (rootReducer) => {
  const enhancers = [];

  if (process.env.NODE_ENV === 'development') {
    enhancers.push(DevTools.instrument());
  }

  return createStore(rootReducer, compose(...enhancers));
};