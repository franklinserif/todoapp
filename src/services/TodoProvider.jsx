import {createContext, useReducer, useEffect} from 'react';
import todoReducer, {types, initalTodoState} from './todoReducer';
import Theme from '../layout/Theme';
import propTypes from 'prop-types';


export const TodoContext = createContext([]);

/**
 * It provides the todos, todo dispatch and types for all
 * his children component
 * @param {JSX.Element} children
 * @return {JSX.Element} <TodoProvider>
 */
function TodoProvider({children}) {
  const [todos, dispatch] = useReducer(todoReducer,
      JSON.parse(localStorage.getItem('todos'))) || initalTodoState;
  useEffect(() => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.log('error: ' + error);
    }
  }, [todos]);

  return <TodoContext.Provider value={{todos, dispatch, types}} >
    <Theme>
      {children}
    </Theme>
  </TodoContext.Provider>;
}

TodoProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default TodoProvider;
