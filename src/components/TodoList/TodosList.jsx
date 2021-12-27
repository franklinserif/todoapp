import Todo from '../Todo/Todo';
import StyledTodoList from './TodoList.styled';


/**
 * Cointais all todos
 * @return {JSX.Element} <TodoList todos={todos}>
 */
function TodoList() {
  return <StyledTodoList>
    todoList
    <Todo />
  </StyledTodoList>;
}

export default TodoList;
