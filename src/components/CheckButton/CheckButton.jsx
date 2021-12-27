import StyledCheckButton from './CheckButton.styled';

/**
 * Check Button
 * @return {JSX.Element} <CheckButton/>
 */
function CheckButton() {
  return <StyledCheckButton>
    <input type="checkbox" />
  </StyledCheckButton>;
}

export default CheckButton;
