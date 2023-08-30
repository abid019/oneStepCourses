import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import {toast} from 'react-hot-toast'
// import Courses from '../pages/Courses'
function Navbar(props) {
    let isLogIn = props.isLogIn
    let setIslogin=props.setIslogin
    function clickHandler(){
        setIslogin(false)
        toast.success("Log out")
    }
  return (
    <div className="flex justify-evenly bg-black text-white py-6">
        <div className='flex flex-row items-center'>
           
                <img src={Logo} alt='' loading="lazy" height={1} width={80} className='h-[50px] w-[50px]'/>
                
            
            <div className='text-center text-red-400 font-bold'>One Step</div>
        </div>
        
        <nav className='mt-4'>
            <ul className="flex gap-10" >
                <li><Link to="/courses">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                
            </ul>
        </nav>
        <div className=" flex gap-10 mt-3">
            {   !isLogIn &&
                <Link to="/login">
                    <button className='bg-[#71717E] px-4 py-[0.4rem] rounded-sm '>Log In</button>
                </Link>
                
            }
            {   !isLogIn &&
                <Link to="/singup ">
                    <button className='bg-[#71717E] px-4 py-[0.4rem] rounded-sm'>Sign Up</button>
                </Link>
                
            }
            {   isLogIn &&
                <Link to="/">
                    <button onClick={clickHandler} className='bg-[#71717E] px-4 py-[0.4rem] rounded-sm'>Log Out</button>
                </Link>
                
            }
            {   isLogIn &&
                <Link to="/courses" >
                    <button className='bg-[#71717E] px-4 py-[0.4rem] rounded-sm'>Courses</button>
                </Link>
            }
            
        </div>
    </div>
  )
}

export default Navbar