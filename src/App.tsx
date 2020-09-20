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
    color: "white",
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
      <img src={navText} />
      <Tabs value={value} onChange={onChange} className={classes.tabs}>
        <Tab label={"Home"} />
        <Tab label={"About"} />
        <Tab label={"Projects"} />
        <Tab label={"Team"} />
        <Tab label={"Contact"} />
      </Tabs>
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
      <h1>Welcome to Masarat </h1>

      </header>
    </div>
  );
}

export default App;
