import React from 'react';
import './App.css';
import Mainpage from './components/mainpage';
import { Services } from './components/services';


function App() {
  return (
    <div className="App">
      <h1 className="maintitle">Spokane power stroker</h1>
      <Mainpage />
        <Services />
    </div>
  );
}

export default App;
