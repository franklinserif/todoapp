import styled from 'styled-components';

// CSS styles for Clear todo button
const StyledClearTodosButton = styled.span`
  .clear-button {
    background-color: transparent;
    border: none;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1rem;
    color: var(--secondary-task-color);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .clear-button:hover {
    color: var(--primary-color);
  }
`;

export default StyledClearTodosButton;
