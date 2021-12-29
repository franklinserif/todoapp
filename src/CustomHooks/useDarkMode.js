/* eslint-disable indent */
import {useState, useEffect} from 'react';

/**
 * It would load the DarkMode config to localstorege and return
 * the state and set function
 * @param {boolean} initialState
 * @return {array} [darkMode, setDarkMode]
 */
function useDarkMode(initialState = false) {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode'))?.darkMode || initialState,
  );

  /**
   * It would load the dark mode to localstorage browser
   * when the dark mode change
   */
  useEffect(() => {
    try {
      localStorage.setItem('darkMode', JSON.stringify({darkMode: darkMode}));
    } catch (error) {
      console.log('error: ' + error);
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
}

export default useDarkMode;
