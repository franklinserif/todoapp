/* eslint-disable react/prop-types */
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
  return <StyledTodo>
    <CheckButton/>
    <span>{todo?.content}</span>
    <DeleteButton />
  </StyledTodo>;
}

Todo.prototype = {
  todo: propTypes.shape({
    content: propTypes.string.isRequired,
  }),
};

export default Todo;
