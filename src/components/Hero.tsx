import { FC } from 'react'
import Logo from './Logo'


const Hero = ({ }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <Logo />
      <img src="./illustration-hero-mobile.png" alt="hero image" className="mb-11" />
      <div className="flex flex-col px-8 gap-6 text-center mb-8">
        <h1 className="text-h-sm font-extrabold">Get paid for the work you <span className='text-light-blue'>love</span> to do.</h1>
        <p className="text-p font-medium text-grey">The 9-5 grind is so last century. We believe in living life on your own terms. Whether youre looking to escape the rat race or set up a side hustle, weve got you covered.</p>
      </div>
      <img src="./icon-scroll.svg" alt="scroll" className="" />
    </div>
  )
}

export default Hero