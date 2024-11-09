import React from 'react'

const Footer = () => {
  return (
    <div className="bg-orange-500 text-white p-6">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h2 className="text-2xl font-bold">Tetap Terhubung</h2>
        </div>
        <div className='mt-6 md:mt-0'>
          <h3 className="font-bold">Alamat</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada nibh velit, sit amet massa vel purus.</p>
        </div>
        <div className="mt-6 md:mt-0">
          <h3 className="font-bold">Opening Hours</h3>
          <p>07:00 - 16:00</p>
        </div>
        <div className="mt-6 md:mt-0">
          <h3 className="font-bold">Sosial Media</h3>
          <div className="flex space-x-4">
            {/* Replace with actual icons */}
            <span>📸</span>
            <span>🎵</span>
            <span>📱</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer