import {useContext} from 'react';
import {TodoContext} from '../../services/TodoProvider';
import Todo from '../Todo/Todo';

import StyledTodoList from './TodoList.styled';


/**
 * Cointais all todos
 * @return {JSX.Element} <TodoList todos={todos}>
 */
function TodoList() {
  const {filteredTodos, dispatch, types} = useContext(TodoContext);

  return <StyledTodoList>

    {filteredTodos.map((todo) => {
      return <Todo todo={todo}
        dispatch={dispatch}
        types={types}
        key={todo.id}/>;
    },
    )}

  </StyledTodoList>;
}

export default TodoList;
