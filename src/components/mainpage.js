import React, { Component } from 'react';


class Mainpage extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: "Bronze commoners' axe",
          imageUrl: '/images/outside.jpg',
          
          desc: "An simple axe made from a single piece of wood with a bronze blade attached."
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
              <div> <h1 className="mainpagetitle">{title}</h1> <img alt={title} className="mainpageimage" src={imageUrl}></img> <p className="mainpagesubtitle">{desc} </p>
                  </div>
        ))}
            </div> 
            
            </div>
            
            
        )
    }
} 
        
export default Mainpage;