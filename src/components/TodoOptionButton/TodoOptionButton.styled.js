import styled from 'styled-components';

const StyledTodoOptionButton = styled.span`
  .option-button {
    background-color: transparent;
    border: none;
    color: var(--secondary-task-color);
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    text-transform: lowercase;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.2s ease;
  }

  .option-button:hover {
    color: var(--primary-color);
  }

  .option-button::first-letter {
    text-transform: uppercase;
  }

  .option-active {
    color: var(--active-button-option);
  }
`;

export default StyledTodoOptionButton;
