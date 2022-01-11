import styled from 'styled-components';

/**
 * CSS styles for Todo List component
 */
const StyledTodoList = styled.section`
  margin-top: 1.5rem;
  border-radius: 5px;
  background-color: var(--todos-board-color);
  width: 100%;
  max-width: 620px;

  .todo-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default StyledTodoList;
