import StyledDeleteButton from './DeleteButton.styled';

/**
 * Delete Button
 * @return {JSX.Element} <DeleteButton />
 */
function DeleteButton({handleDeleteTodo}) {
  return <StyledDeleteButton>
    <button onClick={handleDeleteTodo}>X</button>
  </StyledDeleteButton>;
}

export default DeleteButton;
