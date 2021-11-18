import {useState} from 'react'
export const Navbar = () => {
  const [active, setActive] = useState(0)
  return (
    <div className="flex flex-wrap -mx-1 lg:-mx-4 text-center">
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 p-3">
    Services </div>
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
    Our Crew</div>
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
  Reviews</div>
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
   Contact us</div>
  </div>
  );
};
// mobile and desktop
//maybe gooey logo menu for mobile? 