import React, { Component } from 'react';
import {  Card, Container } from 'react-bootstrap';

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
          desc2: 'aaaaa',
          desc: 'An ornate axe, made of bronze. .'
        },
        {
          title: 'Bronze Dagger',
          imageUrl: '/images/sexyengine.jpg',
          desc2: 'aaaaa',
          desc: 'An Egyptian style dagger from the bronze age '
        },
        {
          title: 'Bronze Spear Head',
          imageUrl: '/images/truckengine.jpg',
          desc2: 'aaaaa',
          desc: 'Solid Bronze'
        },
        {
          title: 'Bronze Age Sword',
          imageUrl: '/images/workingman.jpg',
         
          desc: '23 inches in length, solid bronze ',
          desc2: 'aaaaa'
        },
        
      ] 
    }
  }
  
    render() { 
        return ( 
        
        <div>
        <div className="mainpage">
        {
             
             this.state.items.map(({title, imageUrl, desc, desc2 }) => (
              <Card className="bg-dark text-white">
              <Card.Img src={imageUrl} alt="Card image"  />
              <Card.ImgOverlay>
                <Card.Title className="mainpagetitle">{title}</Card.Title>
                <Card.Text className="mainpagesubtitle">
                  {desc}
                </Card.Text>
                <Card.Text>{desc2}</Card.Text>
              </Card.ImgOverlay>
            </Card>
        ))}
            </div> 
            
            </div>
            
            
        )
    }
} 
        
export default Mainpage;