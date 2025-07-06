import Image from 'next/image'
import React from 'react'

const Logo = ({width, height}:{width:number, height:number}) => {
  return (
    <div>
      <Image
      alt='logo'
      src='/logo.svg'
      width={width}
      height={height}
      />

    </div>
  )
}

export default Logo
