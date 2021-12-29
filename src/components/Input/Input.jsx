import StyledInput from './Input.styled';


/**
 * Input component
 * @return {JSX.Element}
 */
function Input({inputValue, hanldeInputChange}) {
  return <StyledInput>
    <input
      type="text"
      onChange={(e) => hanldeInputChange(e)}
      value={inputValue}
    />
  </StyledInput>;
}

export default Input;
