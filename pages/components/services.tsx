import {useState} from 'react'
export const Services = () => {
    const [active, setActive] = useState(0)
    return (
<div className="flex flex-wrap -mx-1 lg:-mx-4 text-center">
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      Ford Powerstroke diesel repair</div>
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      Gas engine repair</div>
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      Brake Service</div>
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      Steering system repair</div>
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      Differentials</div>
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      General Diesel Maintinence</div>
    </div>
    )
}