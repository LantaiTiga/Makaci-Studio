import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
<div className="bg-orange-500 text-white p-4 items-center">
  <div className="flex flex-col md:flex-row md:justify-between">
    <div className="mb-4 md:mb-0 md:flex-1 lg:flex-[0.3]">
      <h2 className="text-2xl font-bold">Tetap Terhubung</h2>
    </div>


    <div className="mb-4 md:mb-0 md:flex-1 lg:flex-[0.25]">
      <h3 className="font-bold">Alamat</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada nibh velit, sit amet massa vel purus.</p>
    </div>

    <div className="mb-4 md:mb-0 md:flex-1 lg:flex-[0.2]">
      <h3 className="font-bold">Opening Hours</h3>
      <p>07:00 - 16:00</p>
    </div>


    <div className="md:flex-1 lg:flex-[0.25]">
      <h3 className="font-bold">Sosial Media</h3>
      <div className="flex space-x-3 mt-2">
      <a href="#" aria-label="Instagram" className="hover:opacity-75">
  <Image src="path/to/instagram-icon.svg" alt="Instagram" className="w-6 h-6" width={24} height={24} />
</a>
<a href="#" aria-label="TikTok" className="hover:opacity-75">
  <Image src="path/to/tiktok-icon.svg" alt="TikTok" className="w-6 h-6" width={24} height={24} />
</a>
<a href="#" aria-label="WhatsApp" className="hover:opacity-75">
  <Image src="path/to/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6" width={24} height={24} />
</a>
      </div>
    </div>
  </div>
</div>
  )
}

export default Footer