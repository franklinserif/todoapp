import {useContext, useEffect} from 'react';
import {ThemeContext} from '../../layout/Theme';


import StyledHeader from './header.styled';

/**
 * return a JSX Element Header
 * @return {JSX.Element} <Header/>
 */
function Header() {
  const {setDarkMode} = useContext(ThemeContext);

  useEffect(() => {
    console.log(setDarkMode);
  }, []);

  return <StyledHeader>
    Header
  </StyledHeader>;
}

export default Header;
