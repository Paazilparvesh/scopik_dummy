import React from 'react'
import logo from "/src/assets/2088817079.png"

function Footer() {
  return (
    
    <footer className='bg-[#000036] w-full h-72 text-white flex flex-col justify-between items-center px-10'>

      <div className="  md:flex w-full justify-between items-center py-5">
        <div className="flex md:block flex-col justify-center gap-2">
          <img src={logo} alt="Logo" className='size-10 ' />
          <p className="text-md text-white">Scopik</p>
        </div>
        <div className=""></div>
      </div>


      <div className="flex w-full justify-center items-center border-t-2 border-[#484848] py-2">
        <h1 className="flex items-center pb-2">Scopik Edutech - All Rights Reserved</h1>
      </div>
    </footer>

  )
}

export default Footer