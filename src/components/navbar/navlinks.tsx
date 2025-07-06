import React from 'react'
import Link from 'next/link'
type NavLink = {
    href:string;
    label:string;
}

const navLinks: NavLink[] = [
    {'href': '/', 'label': 'Home'},
    {'href': '/about', 'label': 'About'},
    {'href': '/services', 'label': 'Services'},
    {'href': '/contact', 'label': 'Contact'},
    {'href': '/blog', 'label': 'Blog'}
]
const Navlinks = () => {
  return (
    <div className='font-euclid font-[500] flex flex-col pt-24 md:pt-0 md:flex-row justify-center gap-6'>
      {navLinks.map((link, index)=>(
        <Link key={index} href={link.href}>{link.label}</Link>
      ))}
    </div>
  )
}

export default Navlinks
