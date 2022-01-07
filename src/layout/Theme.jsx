import {createContext} from 'react';
import useDarkMode from '../CustomHooks/useDarkMode';
import GlobalStyle from './globalStyle.styled';
import {darkStyle, lightStyle, uniqueStyles} from './themeStyles';


export const ThemeContext = createContext({});

/**
 *  It provide the theme and setThemeMode function
 * @param {Object} children
 * @return {JSX.Element} <Theme />
 */
function Theme({children}) {
  const [darkMode, setDarkMode] = useDarkMode(false);

  // if darkMode is true it will return light if it's not return dark style
  const theme = darkMode ? {uniqueStyles, styles: lightStyle} :
  {uniqueStyles, styles: darkStyle};

  // it would provide theme data and setThemeModo funct to children
  return <ThemeContext.Provider value={{theme, setDarkMode, darkMode}}>
    <GlobalStyle theme={theme}/>
    {children}
  </ThemeContext.Provider>;
}

export default Theme;
