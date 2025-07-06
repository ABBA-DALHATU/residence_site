
import React from 'react'
import Image from 'next/image'
const HeroImage = () => {
  return (
    <div className=' self-start'>
      <Image
        alt='hero-image'
        src='/Navbar/digital-rent.jpg'
        width={600}
        height={2000}
        className='  max-w-screen min-h-[320px] md:min-h-[65vh] object-cover md:min-w-[50vw] rounded-xl rounded-r-xl'
        />
    </div>
  )
}

export default HeroImage
