import PropTypes from 'prop-types';
import StyledCheckButton from './CheckButton.styled';

/**
 * Check Button
 * @param {Function} handlerCompletedTodo
 * @param {boolean} completedButton
 * @return {JSX.Element} <CheckButton/>
 */
function CheckButton({completedButton, handleCompletedTodo}) {
  return <StyledCheckButton>
    <input
      className={completedButton?
        'check-button check-completed' : 'check-button'}
      type="checkbox"
      checked={completedButton}
      onChange={handleCompletedTodo}
    />

<svg onClick={handleCompletedTodo} className={completedButton? 'check-svg' : 'check-svg check-svg-desactive'} xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
  </StyledCheckButton>;
}

CheckButton.prototype = {
  completedButton: PropTypes.bool.isRequired,
  handlerCompleteTodo: PropTypes.func.isRequired,
};

export default CheckButton;
