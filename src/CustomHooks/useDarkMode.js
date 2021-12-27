/* eslint-disable indent */
import {useState, useEffect} from 'react';

/**
 * It would load the DarkMode config to localstore and return
 * the state and set function
 * @param {boolean} initialState
 * @return {array}
 */
function useDarkMode(initialState = false) {
  const [darkMode, setDarkMode] = useState(
    initialState || JSON.parse(localStorage.getItem('darkMode'))?.darkMode,
  );

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify({darkMode: darkMode}));
  }, [darkMode]);

  return [darkMode, setDarkMode];
}

export default useDarkMode;
