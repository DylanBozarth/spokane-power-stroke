import React from 'react';
import './App.css';
import Mainpage from './components/mainpage';
import { Services } from './components/services';
import {Nav } from './components/navbar';
import { Header } from './components/header';
import {useSpring, animated} from 'react-spring'


function App() {
 const props = useSpring({opacity: 1, from: {opacity: 0}}) 
 
 return (
    <div className="App">
    
      <Nav /><animated.div><h1 style={props}>aaaaaa</h1></animated.div>
      <Header />
      <Mainpage />
      
    </div>
  );
}

export default App;
