import React from 'react'
import Tvn from '../../../public/Tvn.svg'
import Paus from '../../../public/Paus.svg'
import Biru from '../../../public/Biru.svg'
import Sbs from '../../../public/SBS.svg'
import Cgv from '../../../public/CGV.svg'
import Image from 'next/image'

const Partner = () => {
  return (
    <div className=''>
        <div className='text-center text-[30px]'>
            <p>We Work With <br/>
                THE BEST Partners</p>
        </div>
        <div className='flex flex-wrap justify-center'>
            <Image
            src={Tvn}
            alt="Tittle Image"
            width={100}
            height={39.77}
            className='mx-[15px] my-[24px]'
            />
            <Image
            src={Paus}
            alt="Tittle Image"
            width={100}
            height={39.77}
            className='mx-[15px] my-[24px]'
            />
            <Image
            src={Biru}
            alt="Tittle Image"
            width={100}
            height={39.77}
            className='mx-[15px] my-[24px]'
            />
            <Image
            src={Sbs}
            alt="Tittle Image"
            width={100}
            height={39.77}
            className='mx-[15px] my-[24px]'
            />
            <Image
            src={Cgv}
            alt="Tittle Image"
            width={100}
            height={39.77}
            className='mx-[15px] my-[24px]'
            />
        </div>
    </div>
  )
}

export default Partner