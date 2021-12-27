export const types = {
  DELETE: 'TODO - DELETE',
  COMPLETE: 'TODO - COMPLETE',
  CREATE: 'TODO - CREATE',
};

/**
 * It would handle all the main logic for
 * delete todo
 * mark complete todo
 * create todo
 * @param {Object} state
 * @param {Object} action
 * @return {Object} state
 */
function storeReducer(state, action) {
  switch (action.types) {
    case types.CREATE: {
    }
    case types.COMPLETE: {
    }
    case types.DELETE: {
    }
    default:
      return state;
  }
}

export default storeReducer;
