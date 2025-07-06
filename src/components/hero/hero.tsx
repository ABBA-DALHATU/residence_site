import React from 'react'
import HeroText from './hero-text'
import HeroImage from './hero-image'
import Container from '../global/container'
import { Button } from '../ui/button'
const Hero = () => {
  return (
    <div>
         <section className='bg-[#F5EFED] rounded-2xl md:pl-12 my-2 md:my-4 mx-auto min-h-[45%]  w-[98%]'>
            <div  className='relative flex flex-col md:flex-row justify-center  items-start  md:justify-between'>
            <HeroText/>
            <HeroImage />
            </div>
    </section>
    </div>
   
  )
}

export default Hero
