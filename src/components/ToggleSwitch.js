import React, { useState } from "react";
// import './App.css';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../components/Themes";
import { GlobalStyles } from "../components/Global";

export const Toggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("myGfgTheme")? localStorage.getItem("myGfgTheme"):"light");
  const navbar = document.getElementById("navbar-main");

  const toggleTheme = () => {
    setTheme(x) 
    if (theme === "light") { 
      localStorage.setItem("myGfgTheme","dark")
      setTheme("dark"); 
      navbar.classList.add("darknav");
      navbar.classList.remove("lightnav");
    }
    else   {
      localStorage.setItem("myGfgTheme","light")
      setTheme("light");
      navbar.classList.add("lightnav");
      navbar.classList.remove("darknav");
    }  
  };
  

  let x = localStorage.getItem("myGfgTheme")? localStorage.getItem("myGfgTheme"):"light";

  return (
    // <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <ThemeProvider theme={x==="light"? lightTheme:darkTheme}>
      <>
        <GlobalStyles />
        <label className="switch">
          {/* <input type="checkbox" onClick={toggleTheme}></input>
          <span class="slider round"></span> */}
          <box-icon type='solid' color ={x==='dark'?'#e9e9e2':'#060606'} onClick={toggleTheme}  name={x==='dark'?'sun':'moon'} id="themeIcon"></box-icon>
        </label>
        

        {/* <button className='btn' onClick={toggleTheme}>O</button> /}
        {/ <Toggle theme={theme} toggleTheme={toggleTheme} /> /}
        {/ <h1>{theme === 'light' ? 'Light' : 'Dark'}</h1> */}
      </>
    </ThemeProvider>
  );
};

export default Toggle;
