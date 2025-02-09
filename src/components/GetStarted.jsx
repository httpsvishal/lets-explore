'use client'
import React, { useState } from 'react'
import { motion } from "framer-motion";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const GetStarted = ({setFormIsOpen}) => {
    const [isLogin,setIsLogin] = useState(false);

    
  return (
    <div className='fixed z-50 inset-0 bg-black bg-opacity-50 h-full w-full flex justify-center items-center ' >
      <motion.div 
        initial={{ opacity: 0, scale: 0.7 }} 
        animate={{ opacity: 1, scale: 1 }} 
        exit={{ opacity: 0, scale: 0.8 }}
        className='relative flex flex-col gap-8 h-96 w-96 px-4 py-8 text-black bg-white rounded'
      >
        <span className='absolute top-4 right-4  font-bold cursor-pointer' onClick={() => setFormIsOpen(false)}>X</span>
        <div className='flex opacity-90' >
            <span 
              onClick={()=>setIsLogin(true)}
              className={'w-1/2 text-center text-2xl font-semibold border-r-2 cursor-pointer border-black' + (isLogin ? "" : " opacity-50" ) } >Login</span>
            <span 
              onClick={()=>setIsLogin(false)}
              className={'w-1/2 text-center text-2xl font-semibold cursor-pointer ' + (isLogin ? " opacity-50" :"")}>SignUp</span>
        </div>
        {isLogin ? <LoginForm /> : <SignupForm />}
      </motion.div>
      
    </div>
  )
}

export default GetStarted
