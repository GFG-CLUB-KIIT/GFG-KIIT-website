import React, {useState} from 'react';
// import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/Themes';
import { GlobalStyles } from '../components/Global';


export const Toggle = () => {

  const [theme, setTheme] = useState('light');

const toggleTheme = () => {
  if (theme === 'light') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}
  return (

    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <label class="switch">
          <input type="checkbox" onClick={toggleTheme} ></input>
          <span class="slider round"></span>
        </label>

        {/* <button className='btn' onClick={toggleTheme}>O</button> /}
        {/ <Toggle theme={theme} toggleTheme={toggleTheme} /> /}
        {/ <h1>{theme === 'light' ? 'Light' : 'Dark'}</h1> */}
      </>
    </ThemeProvider>
  );
}

export default Toggle;