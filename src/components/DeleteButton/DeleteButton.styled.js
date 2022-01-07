import styled from 'styled-components';

// CSS Style for Delete todos button
const StyledDeleteButton = styled.span`
  margin-left: auto;
  .delete-button {
    background-color: transparent;
    outline: none;
    border: none;
    transition: all 0.2s ease;
    cursor: pointer;
  }
  .deletesvg {
    transition: all 0.3s ease;
  }
  .delete-button:hover .deletesvg {
    fill: rgba(255, 255, 255, 0.5);
  }

  .delete-button:click {
  }
`;

export default StyledDeleteButton;
