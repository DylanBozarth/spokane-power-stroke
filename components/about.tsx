import Image from "next/image";
import Brandon from '../public/aboutImages/brandon.jpg'
import Alvin from '../public/aboutImages/office.jpg'
import Dustin from '../public/aboutImages/undertable.jpg'
export const About = (props: any) => {
    return (
        <div className="flex flex-wrap -mx-1 lg:-mx-4 text-center" >
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      Brandon Bozarth
      <Image src={Brandon} loading="eager"   alt="mechanic"  /><h3>Ford certified master Technician
      {/* view cerfitication */}</h3></div>
      
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      Alvin Finch
      <Image src={Alvin} loading="eager"   alt="mechanic"    /><h3 id="reviews">Ford certified master Technician</h3 ></div>
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      Dustin Andersen
      <Image src={Dustin} loading="eager"   alt="mechanic"    /><h3>Ford certified master Technician</h3 ></div>
    </div>
    )
}
// their certifications and photos of them looking professional
