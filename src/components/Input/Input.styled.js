import styled from 'styled-components';

const StyledInput = styled.section`
  width: 100%;
  background-color: var(--todos-board-color);
  padding: 1.2em 1.6em;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  .input {
    width: 65%;
    background-color: var(--todos-board-color);
    border: none;
    outline: none;
    color: var(--primary-color);
    font-size: 1.4rem;
    font-family: 'Josefin Sans', sans-serif;
  }

  .typing-label {
    color: var(--secondary-color);
    width: 25%;
    margin-right: auto;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .typing-color {
    color: var(--primary-color);
  }

  .input-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: relative;
    background: transparent;
    margin-left: 0;
    margin-right: auto;
    border: 2px solid var(--secondary-color);
  }

  @media screen and (min-width: 700px) {
    .typing-label {
      white-space: nowrap;
    }
  }
`;

export default StyledInput;
