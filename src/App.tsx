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
  navigation: {
    listStyleType: "none",
    textAlign: "center",
    margin: '3px',
    backgroundColor: "rgb( 238, 213, 191)",
    display: 'flex',
    justifyContent: 'space-between',
  },
  navigationLogo: {
    width: '15%',
  },
  navigationLinks: {
    alignSelf: 'flex-end',
  },
})

const FullTabView = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0);
  
  const onChange = useCallback((_, value) => {
    setValue(value);
  }, [setValue]);

  return (
    <>
    <div className={classes.navigation}>
      <img className={classes.navigationLogo} src={navText} />
      <div className={classes.navigationLinks}>
        <AnchorLink href= "#home" className={"header-text"}>Home</AnchorLink>
        <AnchorLink href= "#about" className={"header-text"}>About</AnchorLink>
        <AnchorLink href= "#projects" className={"header-text"}>Projects</AnchorLink>
        <AnchorLink href= "#Team" className={"header-text"}>Team</AnchorLink>
        <AnchorLink href= "#Contact" className={"header-text"}>Contact</AnchorLink>
     </div>
   </div>
    <header>
      <iframe
    src={'https://meet.google.com/linkredirect?authuser=0&dest=http%3A%2F%2Fpano.autodesk.com%2Fpano.html%3Fmono%3Djpgs%252F9450daf1-11fa-4fa4-a67a-4ec18c76fb97%26fbclid%3DIwAR3f6nZB9GgoI15scW7zOTyhE9KrL-2Xwoyxv2JtaQ7OpB2tWVNJ7URCi9o'}
    style={{
      height: '600px',
      width: '100%',
    }}
      />
      </header>

    
   </>
  );
}

const MinimizedTabView = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Button onClick={() => setDrawerOpen(true)}><img style={{width: "12px", paddingRight:"4px" , }}  src={menuIcon} />Menu</Button>
      <Drawer anchor={'left'} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      <Button className={"header-text-min"} onClick={() => setDrawerOpen(false)}><img style={{width: "12px", paddingRight:"4px" , }}  src={menuClose} />Menu</Button>
      <AnchorLink className={"header-text-min"} href= "#home" onClick={() => setDrawerOpen(false)}>Home</AnchorLink>
      <AnchorLink className={"header-text-min"} href= "#about" onClick={() => setDrawerOpen(false)}>About</AnchorLink>
      <AnchorLink className={"header-text-min"} href= "projects" onClick={() => setDrawerOpen(false)}>Projects</AnchorLink>
      <AnchorLink className={"header-text-min"} href= "#team" onClick={() => setDrawerOpen(false)}>Team</AnchorLink>
      <AnchorLink className={"header-text-min"} href= "#contact" onClick={() => setDrawerOpen(false)}>Contact</AnchorLink>
      </Drawer>
      <header>
      <iframe
        src={'https://meet.google.com/linkredirect?authuser=0&dest=http%3A%2F%2Fpano.autodesk.com%2Fpano.html%3Fmono%3Djpgs%252F9450daf1-11fa-4fa4-a67a-4ec18c76fb97%26fbclid%3DIwAR3f6nZB9GgoI15scW7zOTyhE9KrL-2Xwoyxv2JtaQ7OpB2tWVNJ7URCi9o'}
        style={{
          height: '600px',
          width: '100%',
    }}
      />
      </header>
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

