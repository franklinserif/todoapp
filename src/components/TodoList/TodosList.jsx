import {useContext, useEffect} from 'react';
import {TodoContext} from '../../services/TodoProvider';
import Todo from '../Todo/Todo';

import StyledTodoList from './TodoList.styled';


/**
 * Cointais all todos
 * @return {JSX.Element} <TodoList todos={todos}>
 */
function TodoList() {
  const {todos, dispatch, types} = useContext(TodoContext);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return <StyledTodoList>

    {todos.map((todo) => {
      return <Todo todo={todo}
        dispatch={dispatch}
        types={types}
        key={todo.id}/>;
    },
    )}

  </StyledTodoList>;
}

export default TodoList;
