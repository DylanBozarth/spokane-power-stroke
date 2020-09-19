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
          title: "Ford Powerstroke diesel repair",
          number: 0,
        },
        {
          image: "./images/sexyengine.jpg",
          title: "Gas engine repair",
          number: 1,
        },
        {
          image: "./images/brakenice.jpeg",
          title: "Brake Service",
          number: 2,
        },
        {
          image: "./images/steering.jpg",
          title: "Steering system repair",
          number: 3,
        },
        {
          image: "./images/rotor.jpg",
          title: "Differentials",
          number: 4,
        },
        {
          image: "./images/workingman.jpg",
          title: "Diesel Driveability ",
          number: 5,
        },
      ],
    };
  }
  state = {};
  render() {
    return (
      <div className="gallery">
        <h1 className="mainheader">
          We specialize in ford powerstroke diesel, however we also have many
          years of experience in gas engines. Foriegn and domestic
          <br />
          Here's what we offer
        </h1>
        <div className="frontbox"></div>
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
