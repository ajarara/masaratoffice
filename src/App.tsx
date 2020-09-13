import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from '@material-ui/core/Tabs' ;
import Tab from '@material-ui/core/Tab';
import { useTheme , makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// Styling 
const useStyles = makeStyles ({
  title :{ 
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  tabs:{
    width: "50%",
  }
})

const FullTabView = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0);
  
  const onChange = useCallback((_, value) => {
    setValue(value);
  }, [setValue]);

  return (
    <React.Fragment>
      <h1 className = {classes.title}><b>Masarat Engineering Office</b></h1>
      <Tabs value={value} onChange={onChange} className = {classes.tabs}>
        <Tab label={"Home"} />
        <Tab label={"About"}/>
        <Tab label={"Projects"} />
        <Tab label={"Team"} />
        <Tab label={"Contact"} />
      </Tabs>
    </React.Fragment>
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
