import {useState, useContext} from 'react';
import {TodoContext} from '../../services/TodoProvider';
import CheckButton from '../CheckButton/CheckButton';
import DeleteButton from '../DeleteButton/DeleteButton';

import StyledTodo from './todo.styled';

/**
 * Todo component
 * @param {object} todo
 * @param {Function} dispatch
 * @param {object} types
 * @return {JSX.Element} <Todo todo={todo} />
 */
function Todo({todo}) {
  const {dispatch, types} = useContext(TodoContext);
  const [completedButton, setCompletedButton] = useState(todo.completed);

  /**
   * Change completedButton state and todos global state
   * @return {void}
   */
  const handleCompletedTodo = () => {
    // Change completedButton state
    setCompletedButton(!completedButton);
    // Change todo state
    dispatch(
        {
          types: types.COMPLETE,
          payload: {...todo, completed: !todo.completed},
        });
  };

  /**
   * Change deleteButtonState and todos global state
   * @return {void}
   */
  const handleDeleteTodo = () => {
    dispatch({types: types.DELETE, payload: {id: todo.id}});
  };

  return <StyledTodo>
    <CheckButton
      completedButton={completedButton}
      handleCompletedTodo={handleCompletedTodo}
    />

    <span onClick={handleCompletedTodo}
      className={todo.completed ? 'todo todo-completed': 'todo todo-active'}>
      {todo?.content}
    </span>

    <DeleteButton className="delete-component"
      handleDeleteTodo={handleDeleteTodo}
    />
  </StyledTodo>;
}
export default Todo;
