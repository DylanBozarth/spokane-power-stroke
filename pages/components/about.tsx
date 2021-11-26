import Image from "next/image";
import Brandon from '../../public/aboutImages/brandon.jpg'
export const About = (props: any) => {
    return (
        <div className="flex flex-wrap -mx-1 lg:-mx-4 text-center">
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      Man 
      <Image src={Brandon}  alt="mechanic" /></div>
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      Man 2</div>
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      Man 3</div>
    </div>
    )
}
// their certifications and photos of them looking professional
