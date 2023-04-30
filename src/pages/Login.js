import React from 'react'
import gate from '../assets/gate.png'
import Templete from '../Compponents/Templete'
function Login(props) {
  let setIslogin = props.setIslogin
  return (
    <div className='bg-black text-white'>
        <Templete
            formtype="Login"
            para1 = "Build skils for today,tomorrow or beyond"
            para2 = "Education to future-proof your career"
            title = "Welcome Back"
            image = {gate}
            setIslogin = {setIslogin}
        />
    </div>
  )
}

export default Login