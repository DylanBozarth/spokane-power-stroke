import React from 'react';
import './App.css';
import Mainpage from './components/mainpage';
import {Nav } from './components/navbar';
import { Header } from './components/header';
import ReactDOM from "react-dom";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Gallery } from "./components/Gallery";
import { SingleImage } from "./components/SingleImage";

function App() {
 
 
 return (
    <div className="App">
    
      <Nav />
      <Header />
      <Router>
    <Route
      render={({ location }) => (
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Gallery} />
            <Route exact path="/image/:id" component={SingleImage} />
          </Switch>
        </AnimatePresence>
      )}
    />
  </Router>
      
    </div>
  );
}

export default App;
