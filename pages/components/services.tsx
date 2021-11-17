import {useState} from 'react'
export const Services = () => {
    const [active, setActive] = useState(0)
    return (
<div className="flex flex-wrap -mx-1 lg:-mx-4 text-center">
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" onClick={() => setActive(1)}>
      Ford Powerstroke diesel repair
      <p className={active  === 1 ? 'text' : 'hidden'}>Additional information</p></div>
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" onClick={() => setActive(2)}>
      Gas engine repair
      <p className={active  === 2 ? 'text' : 'hidden'}>Additional information</p></div>
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" onClick={() => setActive(3)}>
      Brake Service
      <p className={active  === 3 ? 'text' : 'hidden'}>Additional information</p></div>
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" onClick={() => setActive(4)}>
      Steering system repair
      <p className={active  === 4 ? 'text' : 'hidden'}>Additional information</p></div>
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" onClick={() => setActive(5)}>
      Differentials
      <p className={active  === 5 ? 'text' : 'hidden'}>Additional information</p></div>
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" onClick={() => setActive(6)}>
      General Diesel Maintinence
      <p className={active  === 6 ? 'text' : 'hidden'}>Additional information</p></div>
    </div>
    )
}