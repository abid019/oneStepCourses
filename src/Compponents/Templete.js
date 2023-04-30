import React from 'react'
import frame from '../assets/frame.png'
import Loginform from './Loginform'
import Signupform from './Signupform'
import {FcGoogle} from 'react-icons/fc'
function Templete({title,formtype,para1,para2,image,setIslogin}) {
  return (
    <div className='flex justify-center pt-10 bg-black w-[100vw] h-[100vh] gap-56'>
        <div className='text-white w-[30%] flex flex-col gap-5'>
            <div className='font-bold text-[1.7rem]'>{title}</div>
            <div className=''>
                <span className='font-normal opacity-60'>{para1}</span>
                <br/>
                <span className='font-normal italic text-[#4989A1]'>{para2}</span>
            </div>
            <div>
                {
                    formtype === "Login" ?
                    (<Loginform setIslogin={setIslogin} />) : (<Signupform setIslogin={setIslogin} />)
                }
            </div>
            <div className='flex relative mt-5 mb-5'>
                <div className='bg-[#35393e] h-[2px] w-[33%]'></div>
                <div className='text-[#35393e] absolute left-44 -top-3 '>or</div>
                <div className='bg-[#35393e] h-[2px] w-[35%] ml-8'> </div>
            </div>
            <div className='w-10/12 text-[12px] relative'>
                <FcGoogle className='absolute left-28 top-3 text-[21px]'/>
                <button className='border-[#35393e] bg-black text-white border-[1px] py-[12px] px-[9rem]'><p>Sign In With Google</p></button>
            </div>
        </div>
       <div className='relative w-11/12 max-w-[450px] '>
            <img src={frame}
                height={504}
                width={558}
                loading='lazy'
                alt='pattern'
                className=' '
                
            />
                <img src={image}
                height={504}
                width={558}
                loading='lazy'
                alt='students'
                className=' absolute -top-4 right-4 h-[400px] bg-cover'
            />
       </div>

    </div>
  )
}

export default Templete