import React, { Component } from 'react';
import {  Card } from 'react-bootstrap';


class Mainpage extends Component {
    constructor(props) {
        super(props);
    this.state = { items: [

        {
          title: "Bronze Noblemens' axe",
          imageUrl: '/images/rotor.jpg',
          desc2: 'aaaaa',
          desc: 'Engine stuff'
        },
        {
          title: 'Bronze Dagger',
          imageUrl: '/images/sexyengine.jpg',
          desc2: 'aaaaa',
          desc: 'engine stuff '
        },
        {
          title: 'Bronze Spear Head',
          imageUrl: '/images/truckengine.jpg',
          desc2: 'aaaaa',
          desc: 'engine stuff'
        },
        {
          title: 'Bronze Age Sword',
          imageUrl: '/images/workingman.jpg',
         
          desc: 'engine stuff',
          desc2: 'aaaaa'
        },
        
      ] 
    }
  }
    render() { 
        return ( 
        
        <div>
          <h1 className="mainpagetitle">So what do we offer?</h1>
        <div className="mainpage">
        {
             
             this.state.items.map(({title, imageUrl, desc, desc2 }) => (
              <Card className="bg-dark text-white" key={title}>
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