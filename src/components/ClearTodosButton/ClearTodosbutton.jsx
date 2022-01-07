import {useContext} from 'react';
import {TodoContext} from '../../services/TodoProvider';
import StyledClearTodosButton from './ClearTodosButton.styled';


/**
 * Remove all Complete todos
 * @return {JSX.Element} <ClearTodosButton />
 */
function ClearTodosButton() {
  const {dispatch, types} = useContext(TodoContext);

  /**
   * Delete all todos
   * @return {void}
   */
  const handleClick = () => {
    dispatch({types: types.CLEAR_ALL_TODOS, payload: {}});
  };

  return <StyledClearTodosButton>
    <button className='clear-button'
      onClick={handleClick}>Clear Completed</button>
  </StyledClearTodosButton>;
}

export default ClearTodosButton;
