import Image from "next/image";
import { useState } from "react";
import Engine from "../../public/images/gasengine.jpg";
import brake from "../../public/images/brakenice.jpg";
import rotor from "../../public/images/rotor.jpg";
export const Gallery = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="grid grid-cols-3 gap-4">
      <Image src={Engine} alt="spokane-power-stroke" className="col-span-2" /> 
      <Image src={brake} alt="power stroke" className="col-span-2" />
      <Image src={rotor} alt="power stroke" className="col-span-2" />
    </div>
  );
};
// photos of repairs with little tooltips
// gallery type slideshow 