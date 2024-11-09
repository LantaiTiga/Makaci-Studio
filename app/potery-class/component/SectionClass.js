import React from 'react'
import PotteryClass from "./../../../public/Pottery.png"
import Image from 'next/image'

const SectionClass = () => {
  return (
    <section>
        <main className='bg-slate-200 flex justify-between'>
        <div className='bg-white w-[600px]'>
                <h2>Private Studio</h2><br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada nibh velit, sit amet  massa vel purus.</p><br/>
                <p>Harga</p><br/>
                <button className='border-2 px-[5px] py-[5px] border-black'>Pesan Sekarang</button>
            </div>
            <div className='flex'>
                <Image
                src={PotteryClass}
                alt="Example Image"
                width={250} 
                height={250}
                />
            </div>
        </main>
    </section>
  )
}

export default SectionClass