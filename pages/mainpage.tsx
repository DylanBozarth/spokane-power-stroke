import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Gallery } from "./components/gallery";
import { Reviews } from "./components/reviews";
import { Services } from "./components/services";

export const MainPage = () => {
  return (
    <div>
      <h1 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" id="services">Having any of these problems? </h1>
      <Services />

      <h1 className="divider" id="">
        We service all kinds of trucks
      </h1>
      <Gallery />
      <h1 className="divider" id="crew">
        We have trained technicians ready to assist you
      </h1>
      <About />
      <h1 className="divider" id="reviews">
        Hear from our satisfied customers
      </h1>
      <Reviews />
      <h1 className="divider" id="contact">Stop by our shop or give us a call</h1>
      <Contact />
    </div>
  );
};
