import {useState} from 'react';
import propTypes from 'prop-types';
import CheckButton from '../CheckButton/CheckButton';
import DeleteButton from '../DeleteButton/DeleteButton';

import StyledTodo from './todo.styled';

/**
 * Todo component
 * @param {object} todo
 * @param {string} key
 * @return {JSX.Element} <Todo todo={todo} />
 */
function Todo({todo}) {
  const [completedButton, setCompletedButton] = useState(false);
  const [deleteButton, setDeleteButton] = useState(false);

  const handleCompletedTodo = () => {
    setCompletedButton(!completedButton);
  };

  const handlerDeleteTodo = () => {
    setDeleteButton(!deleteButton);
  };

  return <StyledTodo>
    <CheckButton
      completedButton={completedButton}
      handlerCompletedTodo={handleCompletedTodo}
    />

    <span>{todo?.content}</span>

    <DeleteButton
      deleteButton={deleteButton}
      handlerCompleteTodo={handlerDeleteTodo}
    />
  </StyledTodo>;
}

Todo.prototype = {
  todo: propTypes.shape({
    content: propTypes.string.isRequired,
  }),
};

export default Todo;
