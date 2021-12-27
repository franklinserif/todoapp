import {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './globalStyle.styled';
import {darkStyle, lightStyle} from './themeStyles';
import PropTypes from 'prop-types';


/**
 *  It provide the theme and setThemeMode function
 * @param {Object} children
 * @return {JSX.Element} <Theme />
 */
function Theme({children}) {
  const [themeMode, setThemeMode] = useState(false);

  // if theme is true it return light if not return dark theme
  const theme = themeMode ? lightStyle : darkStyle;

  // it would provide theme data and setThemeModo funct to children
  return <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Theme;
