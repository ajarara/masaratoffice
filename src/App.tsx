import React, { useState, useCallback } from 'react';
import './App.css';
import navText from './Image/Navigation_Text.png';
import Tabs from '@material-ui/core/Tabs' ;
import Tab from '@material-ui/core/Tab';
import { useTheme , makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles ({
  title :{ 
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  tabs: {
  },

})

const FullTabView = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0);
  
  const onChange = useCallback((_, value) => {
    setValue(value);
  }, [setValue]);

  return (
    <div className={"navigation"}>
      <img style={{width: "15%", }} src={navText} />
     <div>
        <div className={"header-text"}>Home</div>
        <div className={"header-text"}>About</div>
        <div className={"header-text"}>Projects</div>
        <div className={"header-text"}>Team</div>
        <div className={"header-text"}>Contact</div>
     </div>
   </div>

  );
}

const App = () => {
  const theme = useTheme();
  const aboveLarge = useMediaQuery(theme.breakpoints.up('lg'));
  
  return (
    <div className="App">
      {aboveLarge && <FullTabView />}
      <header className="App-header">

      </header>
      <body className="body">
        <h1 className ="nav_elements">About us</h1>
      </body>
    </div>
  );
}

export default App;
