import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
function Signupform({setIslogin}) {
    const [formData,setFormData] = useState({
        FirstName:"",
        LastName:"",
        Email:"",
        Password1:"",
        Password2:""
    })
    const [showPassword,setShowPassword] = useState(false)
    const [showConfirm,setShowConfirm] = useState(false)
    function changeHandler(event){
         setFormData(prev=>{
            return{
                ...prev,
                [event.target.name] : event.target.value
            }
         })
    }
    const navigator = useNavigate();
    function submitHandler(event){
        event.preventDefault()
        if(formData.Password1 !== formData.Password2){
            toast.error("password doesn't match")
            return;
        }
        setIslogin(true);
        toast.success("Account Created successfully")
        const finaldata = {
            ...formData,
            user
        }
        console.log(finaldata);
        navigator("/courses")
    }
    const [user,setUser] = useState("student")
  return (
    <div >
       <div className='flex bg-richblack-800 rounded-full max-w-max gap-x-1 p-1 my-6'>
            <button className={`${user === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full`}
            onClick={()=>setUser("student")}>
                Student
            </button>
            <button className={`${user === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full`}
            onClick = {()=>setUser("instructor")}>
                Instructor
            </button>
       </div>
       <form onSubmit={submitHandler} className='flex flex-col gap-4'>
         <div className='flex gap-5'>
            <label>
                <p>First Name<sup className='text-[#F70000] text-[16px]'>*</sup></p>
                <input
                    required
                    type='text'
                    placeholder='Enter First Name'
                    name='FirstName'
                    value = {formData.FirstName}
                    onChange = {changeHandler}
                    className=' bg-richblack-800 placeholder:text-richblack-200 placeholder:m-1 py-2 rounded-md text-white border-2 border-black hover:border-richblack-900'
                />
            </label>
            <label>
                <p>Last Name<sup className='text-[#F70000] text-[16px]'>*</sup></p>
                <input
                    required
                    type='text'
                    placeholder='Enter last Name'
                    name='LastName'
                    value = {formData.LastName}
                    onChange = {changeHandler}
                    className=' bg-richblack-800 placeholder:text-richblack-200 placeholder:m-1 py-2 rounded-md text-white border-2 border-black hover:border-richblack-900'
                />
            </label>
         </div>
         <label>
            <p>Email<sup className='text-[#F70000] text-[16px]'>*</sup></p>
            <input
                required
                type='email'
                placeholder='Enter your Email'
                name='Email'
                value = {formData.Email}
                onChange = {changeHandler}
                className=' bg-richblack-800 placeholder:text-richblack-200 placeholder:m-1 py-2 rounded-md text-white border-2 border-black hover:border-richblack-900 w-9/12'
            />
         </label>
         <div className='flex gap-x-5 '>
            <label className='relative'>
                <p>Create Password<sup className='text-[#F70000] text-[16px]'>*</sup></p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    placeholder='Enter Password'
                    name='Password1'
                    value = {formData.password1}
                    onChange = {changeHandler}
                    className=' bg-richblack-800 placeholder:text-richblack-200 placeholder:m-1 py-2 rounded-md text-white border-2 border-black hover:border-richblack-900'
                />
                <span onClick={() => setShowPassword((prev) => !prev)} className='absolute right-3 top-9 text-[20px] cursor-pointer'>
                    {showPassword ? ( <AiOutlineEye/>) : (<AiOutlineEyeInvisible/> ) }
                </span>
            </label>
            <label className='relative'>
                <p>Confirm Password<sup className='text-[#F70000] text-[16px]'>*</sup></p>
                <input
                    required
                    type={showConfirm ? ("text") : ("password")}
                    placeholder='Confirm Password'
                    name='Password2'
                    value = {formData.Password2}
                    onChange = {changeHandler}
                    className=' bg-richblack-800 placeholder:text-richblack-200 placeholder:m-1 py-2 rounded-md text-white border-2 border-black hover:border-richblack-900'
                />
                <span onClick={() =>setShowConfirm((prev) => !prev)} className='absolute right-3 top-9 text-[20px] cursor-pointer'>
                    {showConfirm ? ( <AiOutlineEye/>) : (<AiOutlineEyeInvisible/> ) }
                </span>
            </label>
         </div>
         <button className='bg-[#FFD90F] text-black rounded-md py-2 mt-5 w-9/12'>
            Create Account
         </button>
       </form>
    </div>
  )
}

export default Signupform