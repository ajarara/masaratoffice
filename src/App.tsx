import React, { useState, useCallback } from 'react';
import './App.css';
import navText from './Image/Navigation_Text.png';
import Tabs from '@material-ui/core/Tabs' ;
import Tab from '@material-ui/core/Tab';
import { useTheme , makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Drawer, Button } from '@material-ui/core';

const useStyles = makeStyles ({
  title :{ 
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  tabs: {
  },
  drawerItem: {
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

const MinimizedTabView = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();
  
  return (
    <>
      <Button onClick={() => setDrawerOpen(true)}>Menu</Button>
      <Drawer anchor={'left'} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      <Button onClick={() => setDrawerOpen(false)}>Menu</Button>
      <Button onClick={() => setDrawerOpen(false)}>Home</Button>
      <Button onClick={() => setDrawerOpen(false)}>About</Button>
      <Button onClick={() => setDrawerOpen(false)}>Projects</Button>
      <Button onClick={() => setDrawerOpen(false)}>Team</Button>
      <Button onClick={() => setDrawerOpen(false)}>Contact</Button>
      </Drawer>
    </>
  )
}

const App = () => {
  const theme = useTheme();
  const aboveLarge = useMediaQuery(theme.breakpoints.up('lg'));
  
  return (
    <div className="App">
      {aboveLarge
        ? <FullTabView />
        : <MinimizedTabView />
      }
      <header className="App-header">

      </header>
      <body className="body">
        <h1 className ="nav_elements">About us</h1>
      </body>
    </div>
  );
}

export default App;
