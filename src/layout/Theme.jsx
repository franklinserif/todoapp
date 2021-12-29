import {createContext} from 'react';
import useDarkMode from '../CustomHooks/useDarkMode';
import GlobalStyle from './globalStyle.styled';
import {darkStyle, lightStyle, theme} from './themeStyles';


export const ThemeContext = createContext({});

/**
 *  It provide the theme and setThemeMode function
 * @param {Object} children
 * @return {JSX.Element} <Theme />
 */
function Theme({children}) {
  const [darkMode, setDarkMode] = useDarkMode(false);

  // if darkMode is true it will return light if it's not return dark style
  const styles = darkMode ? {theme, lightStyle} : {theme, darkStyle};

  // it would provide theme data and setThemeModo funct to children
  return <ThemeContext.Provider value={{styles, setDarkMode, darkMode}}>
    <GlobalStyle />
    {children}
  </ThemeContext.Provider>;
}

export default Theme;
