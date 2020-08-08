import React, { Component } from 'react';
import './App.css';
import {Nav } from './components/navbar';
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Gallery } from "./components/Gallery";
import { SingleImage } from "./components/SingleImage";
import  Page1 from './components/page1'
class App extends Component {
  constructor(props ) {
 super(props)

 this.state = {  }
  }
  render() { 
    return ( 
      <div className="App">
      
        <Nav />
       
        <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Gallery} />
              { /* <Route exact path="/image/:id" component={SingleImage} /> */}
              <Route exact path="/image/0" component={Page1} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
        
      </div>
    );
  }
   
  }

 
export default App;
 
