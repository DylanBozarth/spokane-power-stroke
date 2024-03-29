import { About } from "./about";
import { Contact } from "./contact";
import { Services } from "./services";
import { Reviews } from "./reviews";
import { useState } from "react";
import { Navbar } from "./navbar";
import Image from "next/image";
import Logo from '../public/assets/logotext.png'
import { gsap} from "gsap";

export const MainPage = (props: any) => {
  const [active, setActive] = useState(0)
  return (
    <div className="p-1 ">
      <Navbar active={active} setActive={setActive} />
    
      <div className="py-9"> 
        <div className="non-contact">
        <div className="flex justify-center"  id="services">
        <Image src={Logo} className="justify-center"  loading="eager"   alt="spokane power stroke" /></div>
        <h1 className="text-center px-5 text-xl  bg-blue-500 text-white  m-2">
          Having any of these problems?{" "}
        </h1>
       
       
        <Services active={active} setActive={setActive}  />
        <h1 className="text-center px-1 py-1  bg-blue-500 text-white m-2" id="crew"  >
          We have trained technicians ready to assist you
        </h1>
        <About  active={active} setActive={setActive}  />
        <h1 className="text-center px-1  bg-blue-500 text-white m-2"  >
          Hear from our satisfied customers
        </h1>
        <Reviews  active={active} setActive={setActive}  />
        <h1 className="text-center px-1  bg-blue-500 text-white m-2"  >
          Stop by our shop or give us a call
        </h1></div>
        <Contact  active={active} setActive={setActive}  />
      </div>
    </div>
  );
};
