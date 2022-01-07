import {useContext, useState} from 'react';
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
  const {setAction, todos} = useContext(TodoContext);
  const [typeOfButton, setTypeOfButton] = useState('ALL');

  /**
   * handle function for Click Event, it would change
   * the options for filteredTodos
   * @param {string} action
   * @return {void}
   */
  const handleClick = (action) => {
    setAction(action);
    setTypeOfButton(action);
  };

  const countTodos = todos.filter((todo)=> todo.completed === false);

  return <StyledFooter>
    <span className='countTodos'>
      {countTodos.length} {countTodos.length > 1 ? 'items' : 'item'} left
    </span>
    <TodoOptionButton
      className='todo-option'
      action={options.ALL}
      active={typeOfButton === options.ALL}
      handleClick={handleClick}/>
    <TodoOptionButton
      className='todo-option'
      action={options.ACTIVE}
      active={typeOfButton === options.ACTIVE}
      handleClick={handleClick}/>
    <TodoOptionButton
      className='todo-option'
      action={options.COMPLETED}
      active={typeOfButton === options.COMPLETED}
      handleClick={handleClick}/>
    <ClearTodosButton />
  </StyledFooter>;
}

export default Footer;
