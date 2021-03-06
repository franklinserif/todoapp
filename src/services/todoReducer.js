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
      const id = prevTodos.length + 1;
      const newTodo = {
        id: id,
        content: action.payload,
        completed: false,
      };

      return [...prevTodos, newTodo];
    }
    // Check as complete, one todo
    case types.COMPLETE: {
      return [
        ...prevTodos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo,
        ),
      ];
    }
    // Delete a todo
    case types.DELETE: {
      console.log('delete', action.payload.id);
      return [...prevTodos.filter((todo) => todo.id !== action.payload.id)];
    }

    case types.CLEAR_ALL_TODOS: {
      return [];
    }

    case types.REORDER: {
      const {
        payload: {sourceIndex, destinationIndex},
      } = action;
      const todos = [...prevTodos];

      const startIndex = todos.findIndex((todo) => todo.id === sourceIndex);
      const endIndex = todos.findIndex((todo) => todo.id === destinationIndex);

      const [remove] = todos.splice(startIndex, 1);
      todos.splice(endIndex, 0, remove);
      return todos;
    }
    default:
      return prevTodos;
  }
}

export default todoReducer;
