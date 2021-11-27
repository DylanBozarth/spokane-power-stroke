import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Services } from "./components/services";
import { Reviews } from "./components/reviews";
import { useState } from "react";
import { Navbar } from "./components/navbar";
import Image from "next/image";
import Logo from '../public/assets/logotext.png'
export const MainPage = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="p-1 ">
      <Navbar active={active} setActive={setActive} />
      
      <div className="py-10">
        <div className="flex justify-center"  id="services">
        <Image src={Logo} className="justify-center"  alt="spokane power stroke" /></div>
        <h1 className="text-center px-5 text-xl  bg-blue-500 text-white ">
          Having any of these problems?{" "}
        </h1>
       

       
        <Services active={active} setActive={setActive}  />
        <h1 className="text-center px-1 py-1  bg-blue-500 text-white" >
          We have trained technicians ready to assist you
        </h1>
        <About  active={active} setActive={setActive}  />
        <h1 className="text-center px-1  bg-blue-500 text-white"  >
          Hear from our satisfied customers
        </h1>
        <Reviews  active={active} setActive={setActive}  />
        <h1 className="text-center px-1  bg-blue-500 text-white"  >
          Stop by our shop or give us a call
        </h1>
        <Contact  active={active} setActive={setActive}  />
      </div>
    </div>
  );
};
