import {createContext, useReducer, useEffect} from 'react';
import todoReducer from './todoReducer';
import {initalTodoState, types} from '../Helpers/Constants';
import useFilter from '../CustomHooks/useFilter';
import {options} from '../Helpers/Constants';
import Theme from '../layout/Theme';


export const TodoContext = createContext([]);

/**
 * It provides the todos, todo dispatch and types for all
 * his children component
 * @param {JSX.Element} children
 * @return {JSX.Element} <TodoProvider>
 */
function TodoProvider({children}) {
  const [todos, dispatch] = useReducer(todoReducer,
      JSON.parse(localStorage.getItem('todos')) || initalTodoState);
  const [filteredTodos, setAction] = useFilter(todos, options.ALL);

  useEffect(() => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.log('error: ' + error);
    }
  }, [todos]);

  return <TodoContext.Provider
    value={{filteredTodos, dispatch, types, setAction}}
  >
    <Theme>
      {children}
    </Theme>
  </TodoContext.Provider>;
}

export default TodoProvider;
