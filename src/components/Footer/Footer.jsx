import TodoOptionButton from '../TodoOptionButton/TodoOptionButton';
import ClearTodosButton from '../ClearTodosButton/ClearTodosbutton';

import StyledFooter from './Footer.styled';

/**
 * Footer component, it contains all the options to show
 * complete or incomplete todos
 * @return {JSX.Element} <Footer />
 */
function Footer() {
  return <StyledFooter>
    <TodoOptionButton />
    <ClearTodosButton />
  </StyledFooter>;
}

export default Footer;
