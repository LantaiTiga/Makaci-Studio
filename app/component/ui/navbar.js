'use client'
 

import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Navbar() {
  const pathname = usePathname()
 
  return (
    <nav className='flex justify-between '>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
      catalog-product
      </Link>
      <div className='flex flex-row justify-between'>
      <Link className={`link ${pathname === '/potery-class' ? 'active' : 'border-2 border-b-black'}`} href="/potery-class">
        catalog-product
      </Link>

      <Link className={`link ${pathname === '/costum-order' ? 'active' : 'border-2 border-b-black'}`} href="/costum-order">
        catalog-product
      </Link>

      <Link className={`link ${pathname === '/catalog-product' ? 'active' : 'border-2 border-b-black'}`} href="/catalog-product">
        catalog-product
      </Link>
 
      <Link className={`link ${pathname === '/faq' ? 'active' : 'border-2 border-b-black'}`} href="/faq">
        About
      </Link>
      </div>
    </nav>
  )
}
