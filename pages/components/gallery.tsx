import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import Engine from "../../public/images/alvincert.jpg";
import brake from "../../public/images/brakenice.jpg";
import rotor from "../../public/images/rotor.jpg";
import { title } from "process";
export const Gallery = (props: any) => {
  const [catagory, setCatagory] = useState('base')
  const [active, setActive] = useState(0)
  let displayWork = [
    {  image: Engine, type: "powerstroke" },
    {  image: brake, type: "gas" },
    {  image: Engine, type: "steering" },
    {  image: rotor, type: "diff" },
    {  image: Engine, type: "diesel" },
    {  image: Engine, type: "brake" },
  ];
useEffect(() => {

}, [])
  return (
    <div>
      
   
<div className="flex flex-wrap -mx-1 lg:-mx-4 text-center ">
      <div className="pointer my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 " onClick={() => {setActive(1), setCatagory('powerstroke')}}>
      Ford Powerstroke diesel repair
      <p className={active  === 1 ? 'text' : 'hidden'}>Additional information</p></div>
      <div className="pointer my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" onClick={() => {setActive(2), setCatagory('gas')}}>
      Gas engine repair
      <p className={active  === 2 ? 'text' : 'hidden'}>Additional information</p></div>
      <div className="pointer my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" onClick={() => {setActive(3), setCatagory('steering')}}>
      Brake Service
      <p className={active  === 3 ? 'text' : 'hidden'}>Additional information</p></div>
      <div className="pointer my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" onClick={() => {setActive(4), setCatagory('diff')}}>
      Steering system repair
      <p className={active  === 4 ? 'text' : 'hidden'}>Additional information</p></div>
      <div className="pointer my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" onClick={() => {setActive(5), setCatagory('diesel')}}>
      Differentials
      <p className={active  === 5 ? 'text' : 'hidden'}>Additional information</p></div>
      <div className="pointer -1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" onClick={() => {setActive(6), setCatagory('brake')}}>
      General Diesel Maintinence
      <p className={active  === 6 ? 'text' : 'hidden'}>Additional information</p></div>
    </div>
    
    <div className="flex  ">
     
        {displayWork.filter((displayWork) => displayWork.type === catagory).map((displayWork) => (
          <div className="w-1/3 px-1" key={title}>
            {" "}
            <br />
            <Image
              src={displayWork.image}
              layout="responsive" 
              alt="powerstroke"
              width="200"
              height="200"
              className="block h-auto w-full"
            />
          </div>
        ))}
      
    </div></div>
  );
};
// photos of repairs with little tooltips
// gallery type slideshow  Hey its responsive
