import React from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'
function Loginform(props) {
    const navigate = useNavigate()
    let setIslogin = props.setIslogin
    const [formData ,setFormData] = useState({
        email:"",
        password:""
    })
    const [showPassword,setShowPassword] = useState(false)
    function changeHandler(event){
        setFormData(prev=>{
            return{
                ...prev,
                [event.target.name] : event.target.value
            }
        })
    }
    function submitHandler(event){
        event.preventDefault()
        setIslogin(true);
        toast.success("logged In")
        const finalData = {
            ...formData,
        }
        console.log(finalData)
        navigate("/Courses")
    }
    return (
        <form onSubmit={submitHandler} className='flex flex-col gap-4'>
            <label>
                <p>Email Address<sup className='text-[#F70000] text-[16px]'>*</sup></p>
                <input 
                    required
                    type="email"
                    name = "email"
                    value = {formData.email}
                    id = "email"
                    onChange = {changeHandler}
                    placeholder='enter email address'
                    className=' bg-richblack-800 placeholder:text-richblack-200 placeholder:m-1 py-2 rounded-md text-white border-2 border-black hover:border-richblack-900 w-9/12'
                />
            </label>
            <label className='relative'>
                <p>password<sup className='text-[#F70000] text-[16px]'>*</sup></p>
                <input 
                    required
                    type={showPassword ? ("text") : ("password")}
                    name = "password"
                    value = {formData.password}
                    id = "password"
                    onChange = {changeHandler}
                    placeholder='enter your password'
                    className=' bg-richblack-800 placeholder:text-richblack-200 placeholder:m-1 py-2 rounded-md text-white border-2 border-black hover:border-richblack-900 w-9/12'
                />
                <span onClick={() => setShowPassword((prev) => !prev)} className='absolute right-[8.5rem] top-[2.35rem] text-[18px]'>
                    {showPassword ? ( <AiOutlineEye/>) : (<AiOutlineEyeInvisible/> ) }
                </span>
            </label>
            <Link to="# ">
                <p className='text-[#40768B] -mt-5 text-[12px] relative left-[17.5rem]'>forgot password</p>
            </Link>
            <button className='bg-[#FFD90F] text-black rounded-md py-2 mt-5 w-9/12'>Log In</button>
        </form>
    )
}

export default Loginform 