import PropTypes from 'prop-types';
import StyledCheckButton from './CheckButton.styled';

/**
 * Check Button
 * @param {Function} handlerCompletedTodo
 * @param {boolean} completedButton
 * @return {JSX.Element} <CheckButton/>
 */
function CheckButton({completedButton, handlerCompletedTodo}) {
  return <StyledCheckButton>
    <input
      type="checkbox"
      checked={completedButton}
      onChange={handlerCompletedTodo}
    />
  </StyledCheckButton>;
}

CheckButton.prototype = {
  completedButton: PropTypes.bool.isRequired,
  handlerCompleteTodo: PropTypes.func.isRequired,
};

export default CheckButton;
