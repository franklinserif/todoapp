import {types} from '../Helpers/Constants';

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
      const newTodo = {
        id: prevTodos[prevTodos.length - 1].id + 1,
        content: action.payload,
        completed: false,
      };

      return [...prevTodos, newTodo];
    }
    // Check as complete, one todo
    case types.COMPLETE: {
      return prevTodos.map((todo) =>
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
