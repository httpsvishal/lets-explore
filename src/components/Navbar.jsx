'use client'
import GetStarted from "@/components/GetStarted";
import React from 'react'
import Image from 'next/image'
import { useState } from "react";

const Navbar = () => {

  const [isFormOpen, setFormIsOpen] = useState(false)

  return (
    <div className='bg-[#1e3040] h-16 w-full flex justify-between items-center px-6 md:px-16 py-2'>
      <h1 className='flex gap-4 items-center' >
        <Image
            src="/logo.png"
            alt='Explorin Logo'
            width={50}
            height={50}
        />
        <p className='text-white text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600 '> Let's Explore</p>
      </h1>
      <button onClick={()=>setFormIsOpen(true)} 
        className='bg-primary relative z-10 px-4 md:px-8 text-white text-lg py-2 md:py-2 cursor-pointer rounded-md'>
        Get Started
      </button>
      {isFormOpen&& <GetStarted setFormIsOpen={setFormIsOpen}/>}
    </div>
  )
}

export default Navbar
