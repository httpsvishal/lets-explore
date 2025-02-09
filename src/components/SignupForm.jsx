import React, { useState } from 'react'

const SignupForm = () => {
    const[formData,setFormData] = useState({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            });
        const onChange=(e,name)=>{
            setFormData({...formData,[name]:e.target.value});
        }
  return (
    <form className='flex flex-col items-center gap-2'>
            <div className='flex items-center gap-2'>
                <label className='block text-sm font-bold mb-2 w-28 '>Name : </label>
                <input type="text" name="name" value={formData.name} onChange={(e) => onChange(e, "name")} className="border rounded-md block w-full p-2 text-sm" />
            </div>
            <div className='flex items-center gap-2'>
                <label className='block text-sm font-bold mb-2 w-28 '>Email : </label>
                <input type="email" name="email" value={formData.email} onChange={(e) => onChange(e, "email")} className="border rounded-md block w-full p-2 text-sm" />
            </div>
            <div className='flex items-center gap-2'>
                <label className='block text-sm font-bold mb-2 w-28 '>Password : </label>
                <input type="password" name="password" value={formData.password} onChange={(e) => onChange(e, "password")} className="border rounded-md block w-full p-2 text-sm" />
            </div>
            <div className='flex items-center gap-2'>
                <label className='block text-sm font-bold mb-2 w-28   '>Confirm Password : </label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={(e) => onChange(e, "confirmPassword")} className="border rounded-md block w-full p-2 text-sm" />
            </div>
            <button className='bg-orange-500 max-w-max text-white text-lg font-semibold py-1 px-6 rounded-md mt-6 '>SignUp</button>
        </form>
  )
}

export default SignupForm
