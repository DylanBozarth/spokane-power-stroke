import React, { Component } from "react";
import { motion } from "framer-motion";

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
};
class About extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          name: "Brandon Bozarth",
image: "./images/brandon.jpg",
          desc:
            "",
        },
        {
          name: "Alvin Finch",
          image: "./images/office.jpg",
          desc: "",
        },
        {
          name: "Dustin Anderson",
          image: "./images/undertable.jpg",
          desc: "",
        },
        
      ],
    };
  }
  render() {
    return (
      <motion.div
        className="container"
        initial="exit"
        animate="enter"
        exit="exit"
        variants={backVariants}
      >
       
       <div className="row aboutpage">
        
        
          {this.state.items.map(({ name, desc, image }) => (
            <div key={name} className="col-sm-4" >
              <img className="img-fluid" src={image} alt={name} />
              <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{desc}</p>
            
          </div>
            </div>
          ))}
        </div>
        
      </motion.div>
    );
  }
}

export default About;
