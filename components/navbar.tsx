import {useState} from 'react'
export const Navbar = (props: any) => {
  
  return (
    <div className="flex flex-wrap -mx-1 lg:-mx-4 text-center sticky -top-0 z-99   bg-blue-500 stayontop -m-2">
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 p-1 pointer ">
    <a href="#services" className={props.active === 1 ? 'font-bold text-white' : 'text-white'} onClick={() => props.setActive(1)}>Services </a> </div>
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 p-1 pointer">
    <a href="#crew" className={props.active === 2 ? 'font-bold text-white' : 'text-white'} onClick={() => props.setActive(2)}>Our Crew</a></div>
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 p-1 pointer">
    <a href="#reviews" className={props.active === 3 ? 'font-bold text-white' : 'text-white'} onClick={() => props.setActive(3)}>Reviews</a></div>
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 p-1 pointer">
    <a href="#contact" className={props.active === 4 ? 'font-bold text-white' : 'text-white'} onClick={() => props.setActive(4)}>Contact us</a></div>
  </div>
  );
};
// mobile and desktop
//maybe gooey logo menu for mobile? 