import React from 'react'
import Homepage from '../../../public/HeroHomepage.svg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
        <Image
        src={Homepage}
        alt="Tittle Image"
        width={390}
        height={224.75}
        className='sm:w-[1220px] sm:h-[1135px]'
        />
    </div>
  )
}

export default Hero