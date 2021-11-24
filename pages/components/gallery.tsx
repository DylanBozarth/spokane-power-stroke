import Image from "next/image";
import { useMemo, useState } from "react";
import Engine from "../../public/images/alvincert.jpg";
import brake from "../../public/images/brakenice.jpg";
import rotor from "../../public/images/rotor.jpg";
import { title } from "process";
export const Gallery = (props: any) => {
  let catagory: string = "";
  const [active, setActive] = useState(0)
  let displayWork = [
    { title: "111", image: Engine, type: "powerstroke" },
    { title: "111", image: Engine, type: "gas" },
    { title: "111", image: Engine, type: "steering" },
    { title: "111", image: Engine, type: "diff" },
    { title: "111", image: Engine, type: "diesel" },
  ];

  return (
    <div>
      
   
<div className="flex flex-wrap -mx-1 lg:-mx-4 text-center ">
      <div className="pointer my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 " onClick={() => setActive(1)}>
      Ford Powerstroke diesel repair
      <p className={active  === 1 ? 'text' : 'hidden'}>Additional information</p></div>
      <div className="pointer my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" onClick={() => setActive(2)}>
      Gas engine repair
      <p className={active  === 2 ? 'text' : 'hidden'}>Additional information</p></div>
      <div className="pointer my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" onClick={() => setActive(3)}>
      Brake Service
      <p className={active  === 3 ? 'text' : 'hidden'}>Additional information</p></div>
      <div className="pointer my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" onClick={() => setActive(4)}>
      Steering system repair
      <p className={active  === 4 ? 'text' : 'hidden'}>Additional information</p></div>
      <div className="pointer my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" onClick={() => setActive(5)}>
      Differentials
      <p className={active  === 5 ? 'text' : 'hidden'}>Additional information</p></div>
      <div className="pointer -1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" onClick={() => setActive(6)}>
      General Diesel Maintinence
      <p className={active  === 6 ? 'text' : 'hidden'}>Additional information</p></div>
    </div>
    
    <div className="flex  ">
     
        {displayWork.filter((x) => x.type !== "").map((displayWork) => (
          <div className="w-1/3 px-1" key={title}>
            {" "}
            <br />
            <Image
              src={displayWork.image}
              layout="responsive"
              alt={displayWork.title}
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
