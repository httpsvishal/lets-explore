import React, { useState } from 'react'

const LoginForm = () => {
    const[formData,setFormData] = useState({
        email: "",
        password: "",
        });
    const onChange=(e,name)=>{
        setFormData({...formData,[name]:e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className='flex flex-col justify-center grow items-center gap-2' >
            
            <div className='flex items-center gap-2'>
                <label className='block text-sm font-bold mb-2 w-28 '>Email : </label>
                <input type="email" name="email" value={formData.email} onChange={(e) => onChange(e, "email")} className="border rounded-md block w-full p-2 text-sm" />
            </div>
            <div className='flex items-center gap-2'>
                <label className='block text-sm font-bold mb-2 w-28 '>Password : </label>
                <input type="password" name="password" value={formData.password} onChange={(e) => onChange(e, "password")} className="border rounded-md block w-full p-2 text-sm" />
            </div>
            
            <button className='bg-orange-500 max-w-max text-white text-lg font-semibold py-1 px-6 rounded-md mt-6 '>Login</button>
        </form>
    )
}

export default LoginForm
