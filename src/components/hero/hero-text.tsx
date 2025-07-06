import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const HeroText = () => {
  return (
    <div className='md:max-w-[50%] text-[#131818] self-center px-12 pt-24 md:pt-16'>
      <h2 className='capitalize text-4xl md:text-6xl my-6'>
        digital <span className='text-[#0F7173]'>infrastructure </span>for remote property <span className='text-[#f97b57]'>management</span>
          {/* and affordable renting across Africa. */}
      </h2>
      <p className='text-base '>Whether you're a landlord managing multiple rentals or a tenant searching for a reliable home. Residence has you covered.</p>
    <section className='flex flex-col  md:flex-row gap-6 mb-8 mt-6'>
        <Button className=' w-52 text-white hover:bg-[#f97b57]/90'>
        Explore
        </Button>
        <Button asChild
        variant='ghost'
        className='w-52 rounded-full text-[#0F7173]  bg-transparent border-2 border-[#0F7173]'>
            <Link href="/waitlist">
        Join Waitlist

            </Link>
        </Button>
    </section>

    </div>
  )
}

export default HeroText
