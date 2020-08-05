import React from 'react';
import './App.css';
import Mainpage from './components/mainpage';
import { Services } from './components/services';
import {Nav } from './components/navbar';


function App() {
  return (
    <div className="App">
      <Nav />
      <Mainpage />
        <Services />
    </div>
  );
}

export default App;
