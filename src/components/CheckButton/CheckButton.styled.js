import styled from 'styled-components';

// CSS styles for check buttons
const StyledCheckButton = styled.span`
  width: 28px;
  height: 28px;
  position: relative;
  border-radius: 50%;
  margin-left: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: var(--completed-button-color);
  }

  .check-button {
    cursor: pointer;
    border-radius: 50%;
    appearance: none;
    width: 26px;
    height: 26px;
    background: var(--todos-board-color);
    border: 1px solid var(--secondary-color);
    position: absolute;
    left: 1px;
    top: 1px;
  }

  .check-completed {
    background: var(--completed-button-color);
  }

  .check-svg {
    top: 9px;
    left: 9px;
    right: 0;
    position: absolute;
    cursor: pointer;
  }

  .check-svg-desactive {
    display: none;
  }
`;
export default StyledCheckButton;
