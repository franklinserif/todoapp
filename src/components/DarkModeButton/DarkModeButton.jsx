import {useContext} from 'react';
import {ThemeContext} from '../../layout/Theme';
import imgMoon from '../../assets/img/moon.png';
import imgSun from '../../assets/img/sun.png';

import StyledDarkModeButton from './DarkModeButton.styled';


/**
 * Dark mode button container
 * @return {JSX.Element}
 */
function DarkModeButton() {
  const {darkMode, setDarkMode} = useContext(ThemeContext);

  /**
   * Change dark Mode state
   * @return {void}
   */
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return <StyledDarkModeButton>
    <button onClick={handleClick}>
      {darkMode?
      <img src={imgMoon} alt="Moon button" /> :
      <img src={imgSun} alt="Sun button" />
      }
    </button>
  </StyledDarkModeButton>;
}

export default DarkModeButton;
