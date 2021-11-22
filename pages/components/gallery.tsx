import Image from "next/image";
import { useMemo, useState } from "react";
import Engine from "../../public/images/alvincert.jpg";
import brake from "../../public/images/brakenice.jpg";
import rotor from "../../public/images/rotor.jpg";
import { title } from "process";
export const Gallery = (props: any) => {
  let catagory: string = "";
  let displayWork = [
    { title: "111", image: Engine, type: "Landscaping" },
    { title: "111", image: Engine, type: "Landscaping" },
    { title: "111", image: Engine, type: "Landscaping" },
    
  ];

  return (
    <div className="flex flex-wrap -mx-1 lg:-mx-4 z-1">
    <h1 className=""> {catagory}</h1> 
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" >
      {displayWork.map((displayWork) => (
        <div className="" key={title}>
          {" "}
          <br />
          <p>{displayWork.title}</p>
          <Image src={displayWork.image} layout="responsive" alt={displayWork.title} width="200" height="200" className="block h-auto w-full" />
        </div>
      ))}
    </div></div>
  );
};
// photos of repairs with little tooltips
// gallery type slideshow  Hey its responsive
