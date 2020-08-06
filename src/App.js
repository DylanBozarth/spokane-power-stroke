import React from 'react';
import './App.css';
import Mainpage from './components/mainpage';
import { Services } from './components/services';
import {Nav } from './components/navbar';
import { Header } from './components/header';

function App() {
 
 
 return (
    <div className="App">
    
      <Nav />
      <Header />
     <Mainpage />
      
    </div>
  );
}

export default App;
