import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Mainpage extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: "This is our shop",
          imageUrl: '/images/outside.jpg',
          
          desc: "This picture is ass quality by the way."
        },
        {
          title: "Bronze Noblemens' axe",
          imageUrl: '/images/rotor.jpg',
          
          desc: 'An ornate axe, made of bronze. .'
        },
        {
          title: 'Bronze Dagger',
          imageUrl: '/images/sexyengine.jpg',
          
          desc: 'An Egyptian style dagger from the bronze age '
        },
        {
          title: 'Bronze Spear Head',
          imageUrl: '/images/truckengine.jpg',
          
          desc: 'Solid Bronze'
        },
        {
          title: 'Bronze Age Sword',
          imageUrl: '/images/workingman.jpg',
         
          desc: '23 inches in length, solid bronze '
        },
        
      ] 
    }
  }
  
    render() { 
        return ( 
        
        <div>
        <div className="mainpage">
        {
             
             this.state.items.map(({title, imageUrl, desc }) => (
              <Container className="mainpageitem"> <h1 className="mainpagetitle">{title}</h1> <img alt={title} className="mainpageimage" src={imageUrl}></img> <p className="mainpagesubtitle">{desc} </p>
                  </Container>
        ))}
            </div> 
            
            </div>
            
            
        )
    }
} 
        
export default Mainpage;