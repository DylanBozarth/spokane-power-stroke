import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import diesel1 from "../../public/carWork/dieselengine.jpg";
import brake1 from "../../public/carWork/brake1.jpg";
import steering1 from "../../public/carWork/steering.jpg";
import gas1 from "../../public/carWork/gasengine.jpg";
import diff1 from "../../public/carWork/sexyengine.jpg";
import powerstroke1 from "../../public/carWork/truckengine.jpg";
import sample from "../../public/carWork/sexyengine.jpg";
import { title } from "process";
export const Services = (props: any) => {
  const [catagory, setCatagory] = useState("base");
  const [active, setActive] = useState(0);
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
      <div className="flex flex-wrap  lg:-mx-4 text-center  ">
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
      <p className={active === 1 ? "text-center" : "hidden"}>
        Additional information about powerstrokes
      </p>
      <p className={active === 2 ? "text-center" : "hidden"}>
        Additional information about Gas engines
      </p>
      <p className={active === 3 ? "text-center" : "hidden"}>
        Additional information about Steering systems
      </p>
      <p className={active === 4 ? "text-center" : "hidden"}>
        Additional information about Differentials
      </p>
      <p className={active === 5 ? "text-center" : "hidden"}>
        Additional information about Diesel engines
      </p>
      <p className={active === 6 ? "text-center" : "hidden"}>
        Additional information about Brakes
      </p>
      <div className="flex  " id="crew"> 
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
                className="block h-auto w-full"
              />
            </div>
          ))}
      </div>
    </div>
  );
};
// photos of repairs with little tooltips
// gallery type slideshow  Hey its responsive
