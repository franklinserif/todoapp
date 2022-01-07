import styled from 'styled-components';

/**
 * CSS styles for header
 */
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  max-width: 620px;

  .titleApp {
    color: var(--title-color);
    font-size: 1.9em;
    text-transform: uppercase;
    width: 20%;
  }
`;

export default StyledHeader;
