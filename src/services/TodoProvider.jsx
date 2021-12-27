import {createContext, useReducer, useEffect} from 'react';
import todoReducer, {types} from './todoReducer';
import Theme from '../layout/Theme';
import propTypes from 'prop-types';


const TodoContext = createContext({});
/**
 * It provides the dispatch function for all
 * his children component
 * @param {JSX.Element} children
 * @return {JSX.Element} <TodoProvider>
 */
function TodoProvider({children}) {
  const [todos, dispatch] = useReducer(todoReducer, {});

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
