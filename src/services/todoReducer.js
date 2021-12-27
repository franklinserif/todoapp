export const types = {
  DELETE: 'TODO - DELETE',
  COMPLETE: 'TODO - COMPLETE',
  CREATE: 'TODO - CREATE',
};

export const initalTodoState = [
  {id: 1, content: 'make the lunch'},
  {id: 2, content: 'Practice Math'},
  {id: 3, content: 'Go to the gym'},
  {id: 4, content: 'Visit a friend'},
];

/**
 * It would handle all the main logic for
 * delete todo
 * complete todo
 * create todo
 * @param {Array} prevTodos
 * @param {Object} action
 * @return {Object} state
 */
function todoReducer(prevTodos, action) {
  switch (action.types) {
    // Add new todo
    case types.CREATE: {
      return [...prevTodos, ...action.payload];
    }
    // Check as complete, one todo
    case types.COMPLETE: {
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo,
      );
    }
    // Delete a todo
    case types.DELETE: {
      return prevTodos.filter((todo) => todo.id !== action.payload.id);
    }
    default:
      return state;
  }
}

export default todoReducer;
