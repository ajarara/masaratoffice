import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from '@material-ui/core/Tabs' ;
import Tab from '@material-ui/core/Tab';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const FullTabView = () => {
  const [value, setValue] = useState<number>(0);
  
  const onChange = useCallback((_, value) => {
    setValue(value);
  }, [setValue]);

  return (
    <>
      <Tabs value={value} onChange={onChange}>
        <Tab label={"Home"} />
        <Tab label={"About"} />
        <Tab label={"Projects"} />
        <Tab label={"Team"} />
        <Tab label={"Contact"} />
      </Tabs>
    </>
  );
}

const App = () => {
  const theme = useTheme();
  const aboveLarge = useMediaQuery(theme.breakpoints.up('lg'));
  
  return (
    <div className="App">
      {aboveLarge && <FullTabView />}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
