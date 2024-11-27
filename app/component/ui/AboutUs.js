import React from 'react'
import Image from 'next/image'
import aboutus_img1 from '../../../public/img-AboutUs1.svg'
import aboutus_img2 from '../../../public/img-AboutUs2.svg'
import aboutus_img3 from '../../../public/img-AboutUs3.svg'

export const AboutUs = () => {
  return (
    <div className='text-black bg-transparent justify-items-center sm:items-center flex flex-col sm:flex-row sm:overflow-x-auto'>
        <div> 
        <div className='text-left text-[36px] pl-3 text-blue-500'> <h1 className='pt-3'>Tentang </h1>
        <h1 className='whitespace-nowrap'>MAKACI STUDIO</h1></div>
        <p className='text-[24px] px-3 text-justify'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada nibh 
             velit, sit amet  massa vel purus.</p>
       </div>
        <div className=' flex flex-col sm:flex-row'>
        <div className='justify-items-center lg:justify-between overflow-x-scroll'>
        <Image
            src={aboutus_img1}
            alt="Example Image"
            width={357} // Use state variable
            height={389}
            className='sm:w-[357px] sm:h-[389px] pt-[30px]'
            />
      
        <p className='text-[20px] pt-2 px-3 text-justify'> Lorem ipsum dolor sit amet,
             consectetur adipiscing elit. Morbi malesuada nibh 
             velit, sit amet  massa vel purus.</p>
             </div>

             <div className='justify-items-center'>
        <Image
            src={aboutus_img2}
            alt="Example Image"
            width={357} // Use state variable
            height={389}
            className='sm:w-[357px] sm:h-[389px] pt-[30px]'
            />
        <p className='text-[20px] pt-2 px-3 text-justify'> Lorem ipsum dolor sit amet,
             consectetur adipiscing elit. Morbi malesuada nibh 
             velit, sit amet  massa vel purus.</p>
             </div>

             <div className='justify-items-center'>
        <Image
            src={aboutus_img3}
            alt="Example Image"
            width={357} // Use state variable
            height={389}
            className=' sm:w-[357px] sm:h-[389px] pt-[30px]'
            />
        <p className='text-[20px] pt-2 px-3 text-justify'> Lorem ipsum dolor sit amet,
             consectetur adipiscing elit. Morbi malesuada nibh 
             velit, sit amet  massa vel purus.</p>
             </div>
             
      </div>
    </div>
  )
}
