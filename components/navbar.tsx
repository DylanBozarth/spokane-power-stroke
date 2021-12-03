import {useState} from 'react'
export const Navbar = (props: any) => {
  
  return (
    <div className="flex flex-wrap -mx-1 lg:-mx-4 text-center sticky -top-0 z-99   bg-blue-500 stayontop -m-2">
    <div className={props.active === 1 ? "my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 p-1 pointer bg-blue-400" : 'my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 p-1 pointer'}   onClick={() => props.setActive(1)}>
    <a href="#services" className={props.active === 1 ? 'font-bold text-white' : 'text-white'}>Services </a> </div>
    <div className={props.active === 2 ? "my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 p-1 pointer bg-blue-400" : 'my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 p-1 pointer'}     onClick={() => props.setActive(2)}>
    <a href="#crew" className={props.active === 2 ? 'font-bold text-white ' : 'text-white'} >Our Crew</a></div>
    <div  className={props.active === 3 ? "my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 p-1 pointer bg-blue-400" : 'my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 p-1 pointer'}   onClick={() => props.setActive(3)}   >
    <a href="#reviews" className={props.active === 3 ? 'font-bold text-white ' : 'text-white'} >Reviews</a></div>
    <div className={props.active === 4 ? "my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 p-1 pointer bg-blue-400" : 'my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 p-1 pointer'}   onClick={() => props.setActive(4)}>
    <a href="#contact" className="font-bold text-white">Contact us</a></div>
  </div>
  );
};
// mobile and desktop
//maybe gooey logo menu for mobile? 