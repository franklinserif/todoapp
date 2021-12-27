import StyledClearTodosButton from './ClearTodosButton.styled';


/**
 * Remove all Complete todos
 * @return {JSX.Element} <ClearTodosButton />
 */
function ClearTodosButton() {
  return <StyledClearTodosButton>
    <button>Clear Completed</button>
  </StyledClearTodosButton>;
}

export default ClearTodosButton;
