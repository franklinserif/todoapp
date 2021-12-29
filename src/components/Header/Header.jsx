import {useContext, useEffect, useState} from 'react';
import {TodoContext} from '../../services/TodoProvider';
import {KEY_ENTER} from '../../Helpers/Constants';
import Input from '../Input/Input';
import {ThemeContext} from '../../layout/Theme';


import StyledHeader from './header.styled';

/**
 * return a JSX Element Header
 * @return {JSX.Element} <Header/>
 */
function Header() {
  const [inputValue, setInputValue] = useState('');
  const {setDarkMode} = useContext(ThemeContext);
  const {dispatch, types} = useContext(TodoContext);

  /**
   * get the input value
   * @param {string} value
   * @return {void}
   */
  const hanldeInputChange = ({target: {value}}) => {
    setInputValue(value);
  };

  /**
   * @param {string} key
   * @return {void}
   */
  const handleKeyPress = ({key}) => {
    if (key === KEY_ENTER && inputValue !== '') {
      dispatch({types: types.CREATE, payload: inputValue});
    }
  };

  useEffect(() => {
  }, [setDarkMode]);

  return <StyledHeader onKeyPress={handleKeyPress}>
    <Input inputValue={inputValue} hanldeInputChange={hanldeInputChange}/>
  </StyledHeader>;
}

export default Header;
