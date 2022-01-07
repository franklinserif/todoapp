import styled from 'styled-components';

const StyledDarkModeButton = styled.span`
  button {
    background: transparent;
    border: none;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  button:click {
    background: gray;
  }
`;

export default StyledDarkModeButton;
