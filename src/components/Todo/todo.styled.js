import styled from 'styled-components';

/**
 * CSS styles for todo component
 */
const StyledTodo = styled.span`
  display: flex;
  align-items: center;
  padding: 1.2rem;
  border-bottom: 1px solid var(--todos-border-color);

  .todo {
    margin: 0 1rem;
    transition: all 0.2s ease;
  }

  .todo::first-letter {
    text-transform: uppercase;
  }

  .todo:hover {
    cursor: pointer;
  }

  .todo-active {
    color: var(--primary-color);
  }

  .todo-completed {
    text-decoration: line-through;
    color: var(--secondary-task-color);
  }
`;

export default StyledTodo;
