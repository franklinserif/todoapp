import styled from 'styled-components';

/**
 * CSS styles for todo component
 */
const StyledTodo = styled.span`
  .todo-completed {
    text-decoration: line-through;
  }

  .todo:hover {
    cursor: no-drop;
  }
`;

export default StyledTodo;
