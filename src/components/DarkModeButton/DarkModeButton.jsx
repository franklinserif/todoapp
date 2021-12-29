import {useContext} from 'react';
import {ThemeContext} from '../../layout/Theme';
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
    <button onClick={handleClick}>Change Dark mode</button>
  </StyledDarkModeButton>;
}

export default DarkModeButton;
