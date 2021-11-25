import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Services } from "./components/services";
import { Reviews } from "./components/reviews";
import { useState } from "react";
import { Navbar } from "./components/navbar";
export const MainPage = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="p-1 ">
      <Navbar active={active} setActive={setActive} />
      <div className="py-10">
        <h1 className="text-center px:5 text-xl" id="services">
          Having any of these problems?{" "}
        </h1>
       

        <h1 className="text-center px-1 text-blue" id="">
          We service all kinds of trucks
        </h1>
        <Services active={active} setActive={setActive} />
        <h1 className="divider" id="crew">
          We have trained technicians ready to assist you
        </h1>
        <About  active={active} setActive={setActive}  />
        <h1 className="divider" id="reviews">
          Hear from our satisfied customers
        </h1>
        <Reviews  active={active} setActive={setActive}  />
        <h1 className="divider" id="contact">
          Stop by our shop or give us a call
        </h1>
        <Contact  active={active} setActive={setActive}  />
      </div>
    </div>
  );
};
