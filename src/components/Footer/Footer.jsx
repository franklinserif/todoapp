import {useContext} from 'react';
import {options} from '../../Helpers/Constants';
import {TodoContext} from '../../services/TodoProvider';
import TodoOptionButton from '../TodoOptionButton/TodoOptionButton';
import ClearTodosButton from '../ClearTodosButton/ClearTodosbutton';

import StyledFooter from './Footer.styled';

/**
 * Footer component, it contains all the options to show
 * complete or incomplete todos
 * @return {JSX.Element} <Footer />
 */
function Footer() {
  const {setAction} = useContext(TodoContext);

  /**
   * handle function for Click Event, it would change
   * the options for filteredTodos
   * @param {string} action
   * @return {void}
   */
  const handleClick = (action) => {
    setAction(action);
  };

  return <StyledFooter>
    <TodoOptionButton action={options.ALL} handleClick={handleClick}/>
    <TodoOptionButton action={options.ACTIVE} handleClick={handleClick}/>
    <TodoOptionButton action={options.COMPLETED} handleClick={handleClick}/>
    <ClearTodosButton />
  </StyledFooter>;
}

export default Footer;
