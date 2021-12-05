import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import diesel1 from "../public/carWork/dieselengine.jpg";
import brake1 from "../public/carWork/brake1.jpg";
import steering1 from "../public/carWork/steering.jpg";
import gas1 from "../public/carWork/gasengine.jpg";
import diff1 from "../public/carWork/diff1.jpg";
import powerstroke1 from "../public/carWork/truckengine.jpg";
import sample from "../public/carWork/shop.jpg";
import { title } from "process";
export const Services = (props: any) => {
  const [catagory, setCatagory] = useState("base");
  const [activeService, setActive] = useState(0);
  let displayWork = [
    { image: powerstroke1, type: "powerstroke" },
    { image: gas1, type: "gas" },
    { image: steering1, type: "steering" },
    { image: diff1, type: "diff" },
    { image: diesel1, type: "diesel" },
    
    { image: brake1, type: "brake" },
    { image: sample, type: "base" },
  ];

  useEffect(() => {}, []);
  return (
    <div>
      <div className="flex flex-wrap  px-5 lg:-mx-4 text-center   ">
        <div
          className="pointer border-2 border-blue-500 hover:bg-blue-100 text-blue-500 font-bold py-2 px-4 rounded w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 "
          onClick={() => {
            setActive(1), setCatagory("powerstroke");
          }}
        >
          Ford Powerstroke diesel repair
        </div>
        <div
          className="pointer border-2 border-blue-500 hover:bg-blue-100 text-blue-500 font-bold py-2 px-4 rounded w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 "
          onClick={() => {
            setActive(2), setCatagory("gas");
          }}
        >
          Gas engine repair
        </div>
        <div
          className="pointer border-2 border-blue-500 hover:bg-blue-100 text-blue-500 font-bold py-2 px-4 rounded w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 "
          onClick={() => {
            setActive(3), setCatagory("steering");
          }}
        >
          Steering system repair
        </div>
        <div
          className="pointer border-2 border-blue-500 hover:bg-blue-100 text-blue-500 font-bold py-2 px-4 rounded w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 "
          onClick={() => {
            setActive(4), setCatagory("diff");
          }}
        >
          Differentials
        </div>
        <div
          className="pointer border-2 border-blue-500 hover:bg-blue-100 text-blue-500 font-bold py-2 px-4 rounded w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 "
          onClick={() => {
            setActive(5), setCatagory("diesel");
          }}
        >
          Diesel Matinence
        </div>
        <div
          className="pointer border-2 border-blue-500 hover:bg-blue-100 text-blue-500 font-bold py-2 px-4 rounded w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 "
          onClick={() => {
            setActive(6), setCatagory("brake");
          }}
        >
          Brake Service
        </div>
      </div>
      <p className={activeService === 1 ? "text-center" : "hidden"}>
      We mainly specialise in Ford powerstroke diesel repair. Everything from full engine rebuilds to basic maintence.
      </p>
      <p className={activeService === 2 ? "text-center" : "hidden"}>
      We also are very proficent in servicing Gas engine vehicles from engine installs to driveability and maintence.
      </p>
      <p className={activeService === 3 ? "text-center" : "hidden"}>
      Does your Truck or car&apos;s steering not feel quite right? Or makes noise? We can fix it.
      </p>
      <p className={activeService === 4 ? "text-center" : "hidden"}>
      We also service and repair ford differentials.
      </p>
      <p className={activeService === 5 ? "text-center" : "hidden"}>
      Is the &apos;check engine&apos; light on? Your Truck running rough? Noise from the engine? We can fix it.
      </p>
      <p className={activeService === 6 ? "text-center" : "hidden"}>
      We also service brakes all makes and models.
      </p>
      <div className="flex  " > 
        {displayWork
          .filter((displayWork) => displayWork.type === catagory)
          .map((displayWork) => (
            <div className="w-full" key={title}>
              {" "}
              <br />
              <Image
                src={displayWork.image}
                layout="responsive"
                alt="powerstroke"
                className=""
              />
            </div>
          ))}
      </div>
    </div>
  );
};
// photos of repairs with little tooltips
// gallery type slideshow  Hey its responsive
