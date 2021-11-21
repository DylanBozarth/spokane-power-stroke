import Image from "next/image";
import { useMemo, useState } from "react";
import Engine from "../../public/images/gasengine.jpg";
import brake from "../../public/images/brakenice.jpg";
import rotor from "../../public/images/rotor.jpg";
import { title } from "process";
export const Gallery = (props: any) => {
  let catagory: string = "";
  let displayWork = [
    { title: "aaa", image: "/public/images/gasstick.jpg", type: "Landscaping" },
    { title: "aaa", image: "/public/images/gasstick.jpg", type: "Landscaping" },
    { title: "aaa", image: "/public/images/gasstick.jpg", type: "Landscaping" },
  ];

  return (
    <div>
    <h1> {catagory}</h1> 
    <div className="" >
      {displayWork.map((displayWork) => (
        <div className="" key={title}>
          {" "}
          <br />
          <p>{displayWork.title}</p>
          <Image src={displayWork.image} layout="fill" alt={displayWork.title} />
        </div>
      ))}
    </div></div>
  );
};
// photos of repairs with little tooltips
// gallery type slideshow  Hey its responsive
