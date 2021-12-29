import StyledTodoOptionButton from './TodoOptionButton.styled';

/**
 * Change the state of todos.options
 * @param {string} action
 * @param {Function} handleClick
 * @return {JSX.Element} <TodoOptionButton />
 */
function TodoOptionButton({action, handleClick}) {
  return <StyledTodoOptionButton>
    <button onClick={()=> handleClick(action)}>{action}</button>
  </StyledTodoOptionButton>;
}

export default TodoOptionButton;
