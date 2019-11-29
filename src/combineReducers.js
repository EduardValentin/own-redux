/**
 * Combines reducers from a list and if one of them matches the action type, the result is returned to update the store
 * @param {Function[]} reducers reducers to test
 */
export default reducers => (state, action) => {
    let returnedResult = null;
    reducers.forEach(reducer => {
      const reducerResult = reducer(state, action);
      if (reducerResult) returnedResult = reducerResult;
    });
    if (returnedResult) {
      return returnedResult;
    }
    throw new Error('Action type unknow.');
  }
  