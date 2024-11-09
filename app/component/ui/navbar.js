'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/IconLogo.svg'
import HoverBg from '../../../public/HoverBg.svg'

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='relative items-center px-[17px] mt-[20px]'>
      <div className='flex justify-between'>
      <Image
        src={Logo}
        width={54}
        height={27}
        alt='Logo'
      />

       <div className="hidden lg:flex flex-row gap-[20px]">
          <Link className={`link text-orange-500 text-lg py-2 ${pathname === '/pottery-class' ? 'active' : ''}`} href="/pottery-class" onClick={toggleMenu}>
            Pottery Class
          </Link>
          <Link className={`link text-orange-500 text-lg py-2 ${pathname === '/custom-order' ? 'active' : ''}`} href="/custom-order" onClick={toggleMenu}>
            Custom Order
          </Link>
          <Link className={`link text-orange-500 text-lg py-2 ${pathname === '/catalog-product' ? 'active' : ''}`} href="/catalog-product" onClick={toggleMenu}>
            Catalog Product
          </Link>
          <Link className={`link text-orange-500 text-lg py-2 ${pathname === '/faq' ? 'active' : ''}`} href="/faq" onClick={toggleMenu}>
            FAQ
          </Link>
        </div>

      <button className='lg:hidden' onClick={toggleMenu}>
        <span
          className={`block w-6 h-0.5 bg-black mb-1 transition-transform duration-300 ${
            isOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black mb-1 transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        ></span>
      </button>
      </div>
      

      {isOpen && (
        <div className="flex flex-col text-end">
          <Link className={`link text-orange-500 text-lg py-2 ${pathname === '/pottery-class' ? 'active' : ''} hover:bg-[url('')]`} href="/pottery-class" onClick={toggleMenu}>
            Pottery Class
          </Link>
          <Link className={`link text-orange-500 text-lg py-2 ${pathname === '/custom-order' ? 'active' : ''}`} href="/custom-order" onClick={toggleMenu}>
            Custom Order
          </Link>
          <Link className={`link text-orange-500 text-lg py-2 ${pathname === '/catalog-product' ? 'active' : ''}`} href="/catalog-product" onClick={toggleMenu}>
            Catalog Product
          </Link>
          <Link className={`link text-orange-500 text-lg py-2 ${pathname === '/faq' ? 'active' : ''}`} href="/faq" onClick={toggleMenu}>
            FAQ
          </Link>
        </div>
      )}
    </nav>
  )
}