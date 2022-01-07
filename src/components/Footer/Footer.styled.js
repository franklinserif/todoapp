import styled from 'styled-components';

// CSS Styles for footer
const StyledFooter = styled.footer`
  background-color: var(--todos-board-color);
  width: 100%;
  max-width: 620px;
  padding: 1.2rem;
  display: flex;
  justify-content: center;

  .countTodos {
    color: var(--secondary-color);
  }

  span {
    margin-left: 0.7rem;
  }

  span:first-child {
    margin: 0;
    margin-right: auto;
    margin-left: 0.3rem;
  }

  span:last-child {
    margin: 0;
    margin-left: auto;
  }
`;

export default StyledFooter;
