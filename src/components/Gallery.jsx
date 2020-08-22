import React, { Component } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
};

const frameVariants = {
  hover: { scale: 0.95 },
};

const imageVariants = {
  hover: { scale: 1.25 },
};

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        
        {
          image: "./images/truckengine.jpg",
          title: "Ford a",
          number: 1,
        },
        {
          image: "./images/sexyengine.jpg",
          title: "Truck Stuff",
          number: 2,
        },
        {
          image: "./images/brake.jpg",
          title: "Engine Repair",
          number: 0,
        },
        {
          image: "./images/steering.jpg",
          title: "Engine Repair",
          number: 0,
        },
        {
          image: "./images/rotor.jpg",
          title: "Engine Repair",
          number: 0,
        },
        {
          image: "./images/workingman.jpg",
          title: "Engine Repair",
          number: 0,
        },
      ],
    };
  }
  state = {};
  render() {
    return (
      <div className="gallery">
        <motion.div
          className="thumbnails"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
        >
          {this.state.items.map(({ title, image, number }) => (
            <motion.div className="thumbnail" variants={thumbnailVariants}>
              <motion.div
                className="frame"
                whileHover="hover"
                variants={frameVariants}
                transition={transition}
              >
                <h1 className="gallerytitle">{title}</h1>
                <Link to={`/image/${number}`}>
                  <motion.img
                    src={image}
                    alt={image}
                    variants={imageVariants}
                    transition={transition}
                  />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    );
  }
}

export default Gallery;
