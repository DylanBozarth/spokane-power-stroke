import Image from "next/image";
import { useState } from "react";
import Engine from "../../public/images/gasengine.jpg";
import brake from "../../public/images/brakenice.jpg";
import rotor from "../../public/images/rotor.jpg";
export const Gallery = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="flex flex-wrap -mx-1 lg:-mx-4 z-1">
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <Image src={Engine} alt="spokane-power-stroke" className="block h-auto w-full" /> </div>
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <Image src={brake} alt="power stroke" className="block h-auto w-full" /></div>
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <Image src={rotor} alt="power stroke" className="block h-auto w-full" /></div>
    </div>
  );
};
// photos of repairs with little tooltips
// gallery type slideshow  Hey its responsive