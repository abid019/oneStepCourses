import React from 'react'
import audito from '../assets/audito.png'
import Templete from '../Compponents/Templete'
function Signup(props) {
    let setIslogin = props.setIslogin
  return (
    <Templete className = ''
        title = "join the million learning to code with Central Universities for free"
        para1 = "Build skills for today,tomorrow and beyond"
        para2 = "Education to future proof your career"
        image = {audito}
        setIslogin = {setIslogin}
    />
  )
}


export default Signup