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
 * @param {Array} prevTodos
 * @param {Object} action
 * @return {Object} state
 */
function todoReducer(prevTodos, action) {
  switch (action.types) {
    case types.CREATE: {
      return [...prevTodos, ...action.payload];
    }
    case types.COMPLETE: {
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo,
      );
    }
    case types.DELETE: {
      return prevTodos.filter((todo) => todo.id !== action.payload.id);
    }
    default:
      return state;
  }
}

export default todoReducer;
