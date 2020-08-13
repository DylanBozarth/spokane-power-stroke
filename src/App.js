import React, { Component } from 'react';
import './App.css';
import {Nav } from './components/navbar';
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Gallery  from "./components/Gallery";
import  {Page1} from './components/pages/page1'
import {Page2} from './components/pages/page2'
import {Page3} from './components/pages/page3'
import {Page4} from './components/pages/page4'
import {Page5} from './components/pages/page5'
import {Page6} from './components/pages/page6'
import { Footerthing } from './components/footer';
import  Reviews  from './components/pages/reviews';
import { About } from './components/pages/about';
import { Contact } from './components/pages/contact';
class App extends Component {
  constructor(props ) {
 super(props)

 this.state = {  }
  }
  render() { 
    return ( 
      <div className="App">
      
        
      
        <Router>
          <Nav />
          <Footerthing />
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Gallery} />
              { /* <Route exact path="/image/:id" component={SingleImage} /> */}
              <Route exact path="/image/0" component={Page1} />
              <Route exact path="/image/1" component={Page2} />
              <Route exact path="/image/2" component={Page3} />
              <Route exact path="/image/3" component={Page4} />
              <Route exact path="/image/4" component={Page5} />
              <Route exact path="/image/5" component={Page6} />
              <Route  path="/reviews" component={Reviews} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
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
 
