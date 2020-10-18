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

const AboutUsCardListing = () => {
  
  const details = [
    {
      title: '20',
      subtitle: 'YEARS OF EXPERIENCE',
    },
    {
      title: '400',
      subtitle: 'PROJECTS DONE',
    },
    {
      title: '8',
      subtitle: 'TEAM',
    },
    {
      title: '380',
      subtitle: 'HAPPY CUSTOMERS'
    }
  ];
  
  return <div className={"About_Us_Card_Listing"}>
    {details.map((detail) => <AboutUsCard {...detail} />)}
  </div>
};


const AboutUsCard: React.FC <{
  title: string,
  subtitle: string,
}> = ({ title, subtitle }) => (
  <div className={"About_Us_Card"}>
    <p className={"About_Us_Card_Title"}>{title}</p>
    <p className={"About_Us_Card_Subtitle"}>{subtitle}</p>
  </div>
);

const App = () => {
  const theme = useTheme();
  const aboveLarge = useMediaQuery(theme.breakpoints.up('lg'));
  
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
        <div className= "about_us_paragragh">
          <p>We are a premier engineering company serving customers in the government and private sectors in worldwide. Our staff of engineers, architects and surveyors work with the highest innovative engineering techniques and scientific methods to provide high quality designs and practical solutions to our customers.</p>
        </div>
      <AboutUsCardListing />
      </section>
      </body>
    </div>
  );
}

export default App;
