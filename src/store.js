import React, { useReducer } from 'react';
import StoreContext from './context.js';
import { is } from 'ramda';
import reducerA from './reducerA.js';
import reducerB from './reducerB.js';
import combineReducers from './combineReducers';

const reducers = [
  reducerA,
  reducerB,
];

/** Store provider component, makes the store and dispatch accessible via context */
export default ({ children, initialState }) => {
  /** The store */
  const [state, dispatch] = useReducer(
    combineReducers(reducers),
    initialState
  );

  return (
    <StoreContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {is(Function, children) ? children({ state, dispatch }) : children}
    </StoreContext.Provider>
  );
}
