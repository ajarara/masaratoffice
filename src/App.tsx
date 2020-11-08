import React, { useState, useCallback } from 'react';
import './App.css';
import navText from './Image/Navigation_Text.png';
import menuIcon from './Image/menu.png';
import menuClose from './Image/menu1.png';
import Tabs from '@material-ui/core/Tabs' ;
import Tab from '@material-ui/core/Tab';
import { useTheme , makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Drawer, Button } from '@material-ui/core';
import { AboutUs } from './About';
import AnchorLink from 'react-anchor-link-smooth-scroll'


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
        <a href= "#home" className={"header-text"}>Home</a>
        <a href= "#about" className={"header-text"}>About</a>
        <a href= "#projects" className={"header-text"}>Projects</a>
        <a href= "#home" className={"header-text"}>Team</a>
        <a href= "#home" className={"header-text"}>Contact</a>
     </div>
   </div>

  );
}

const MinimizedTabView = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Button onClick={() => setDrawerOpen(true)}><img style={{width: "12px", paddingRight:"4px" , }}  src={menuIcon} />Menu</Button>
      <Drawer anchor={'left'} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      <Button onClick={() => setDrawerOpen(false)}><img style={{width: "12px", paddingRight:"4px" , }}  src={menuClose} />Menu</Button>
      <Button onClick={() => setDrawerOpen(false)}>Home</Button>
      <Button onClick={() => setDrawerOpen(false)}>About</Button>
      <Button onClick={() => setDrawerOpen(false)}>Projects</Button>
      <Button onClick={() => setDrawerOpen(false)}>Team</Button>
      <Button onClick={() => setDrawerOpen(false)}>Contact</Button>
      </Drawer>
    </>
  );
};

const App = () => {
  const theme = useTheme();
  const aboveLarge = useMediaQuery(theme.breakpoints.up('lg'));
  
  // http://pano.autodesk.com/pano.html?url=jpgs%2Fc258cd7e-ee1e-4d71-b078-5ba5fe97eab4&fbclid=IwAR2GdGaDeYXRR7gza9XyAH7qWTD0eIzMve2kxoTbvrYoAFmBHwjxl2-VuVQ
  const className = aboveLarge
    ? "App-header"
    : "App-mobile-header";
  
  return (
    <div className="App">
      {aboveLarge
        ? <FullTabView />
        : <MinimizedTabView />
      }
      <header className={className}>

      </header>
      <body className="body">
      <section className="About_us">
        <h1 className ="nav_elements">About us</h1>
        <AboutUs />
      </section>
      </body>
    </div>
  );
}

export default App;
