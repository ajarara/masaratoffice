import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from '@material-ui/core/Tabs' ;
import Tab from '@material-ui/core/Tab';


function App() {
  
  const [value, setValue] = useState<number>(0);

  const onChange = useCallback((_, value) => {
    setValue(value);
  }, [setValue]);
  
  return (
    <div className="App">
      <Tabs value={value} onChange={onChange}>
      <Tab label={"Home"} />
      <Tab label={"About"} />
      <Tab label={"Project"} />
      <Tab label={"Team"} />
      <Tab label={"Contact"} />

      </Tabs>
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
