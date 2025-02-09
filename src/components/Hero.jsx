import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-[calc(100vh-4rem)] '>
      <div className='relative px-6 md:px-16 py-4 md:py-8 z-30 flex flex-col justify-center h-full gap-8'>
        <p className='text-6xl text-lightOrange font-bold'>Connect. Share. Explore.</p>
        <p className='text-5xl text-white font-semibold'>Join a vibrant community and discover endless possibilities.</p>
        <p className='text-4xl text-gray-400 font-medium'> Your journey into social discovery starts here. 🚀</p>
        <img
        src={"https://res.cloudinary.com/dvslu2jt5/image/upload/v1735939550/newHeroPattern1_afqwjw.svg"}
        className="hidden sm:block absolute -top-10 left-0"
        alt=""
      />
      <img
        src={"https://res.cloudinary.com/dvslu2jt5/image/upload/v1735939551/newHeroPattern2_avoghz.svg"}
        className="hidden sm:block absolute top-0 right-5"
        alt=""
      />
      <img
        src={"https://res.cloudinary.com/dvslu2jt5/image/upload/v1735939550/newHeroOverlay_tcarir.svg"}
        className="hidden sm:block absolute top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] w-full h-full backdrop-blur-[300px] -z-10   "
        alt=""
      />
      </div>
    </div>
  )
}

export default Hero
