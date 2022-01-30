import React, { useState } from "react";
// import './App.css';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../components/Themes";
import { GlobalStyles } from "../components/Global";

export const Toggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("myGfgTheme")? localStorage.getItem("myGfgTheme"):"light");
  React.useEffect(() => {
  const navbar = document.getElementById("navbar-main");
    if (theme === "light") { 
      navbar.classList.add("lightnav");
    }
    else   {
      navbar.classList.add("darknav");
    }  
    
  }, []);

  const toggleTheme = () => {
  const navbar = document.getElementById("navbar-main");
    setTheme(localStorage.getItem("myGfgTheme")? localStorage.getItem("myGfgTheme"):"light") 
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
  

  

  return (
    // <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <ThemeProvider theme={theme==="light"? lightTheme:darkTheme}>
      <>
        <GlobalStyles />
        <label className="switch">
          {/* <input type="checkbox" onClick={toggleTheme}></input>
          <span class="slider round"></span> */}
          <box-icon type='solid' color ={theme==='dark'?'#e9e9e2':'#060606'} onClick={toggleTheme}  name={theme==='dark'?'sun':'moon'} id="themeIcon"></box-icon>
        </label>
        

        {/* <button className='btn' onClick={toggleTheme}>O</button> /}
        {/ <Toggle theme={theme} toggleTheme={toggleTheme} /> /}
        {/ <h1>{theme === 'light' ? 'Light' : 'Dark'}</h1> */}
      </>
    </ThemeProvider>
  );
};

export default Toggle;
