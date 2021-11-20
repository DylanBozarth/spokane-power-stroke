import {useState} from 'react'
export const Navbar = (props) => {
  
  return (
    <div className="flex flex-wrap -mx-1 lg:-mx-4 text-center sticky -top-0 z-99   bg-blue-500 stayontop">
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 p-2  ">
    <p className={props.active === 1 ? 'font-bold text-white' : 'text-white'} onClick={() => props.setActive(1)}>Services </p> </div>
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 p-2">
    <p className={props.active === 2 ? 'font-bold text-white' : 'text-white'} onClick={() => props.setActive(2)}>Our Crew</p></div>
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 p-2">
    <p className={props.active === 3 ? 'font-bold text-white' : 'text-white'} onClick={() => props.setActive(3)}>Reviews</p></div>
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 p-2">
    <p className={props.active === 4 ? 'font-bold text-white' : 'text-white'} onClick={() => props.setActive(4)}>Contact us</p></div>
  </div>
  );
};
// mobile and desktop
//maybe gooey logo menu for mobile? 