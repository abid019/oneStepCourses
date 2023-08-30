import React from 'react'
import ReactPlayer from 'react-player'
import {RiSendPlane2Fill} from 'react-icons/ri'
import {BsFillChatTextFill,BsQuestionSquareFill} from 'react-icons/bs'
import {CgNotes} from 'react-icons/cg'
import {useState} from 'react'
function Videos() {
    
    const [formData,setFormData] = useState({
        comments:"",
    })
    function ChangeHandler(event){
        setFormData((prev)=>{
            return{
                ...prev,
                [event.target.name] : event.target.value
            }
        })
        
    }
    function clickHandler(){
        console.log(formData);
        // const show_text = {
        //     ...formData
        // }
    }
    
  return (
    <div className='text-black font-bold bg-gray-500 w-[100vw] h-[90vh] flex gap-4 overflow-hidden'>
        <div className='w-[70%]'>
        <ReactPlayer
            width="100%"
            height="90%"
            url=" https://res.cloudinary.com/dvuls0cok/video/upload/c_scale,w_708/v1680719210/Artificial_Intelligence_gtrjac.mp4"
            controls
            muted
            config={{
              youtube: {
                playerVars: { showinfo: 1 }
              }
            }}
            className=' mx-auto p-16'
          />
        </div>
        <div className=' h-[90vh] bg-black w-[25%] border-2 border-black relative'>
            <div className='text-white w-full h-[40px] border-b-2 border-white'>Chat</div>
            <div className='h-[80vh]'>
                <input type='text'
                className='border-2 border-black w-full h-[100%] font-normal bg-black rounded-md text-white'
                value = {formData.show_text}
                name = "show_text" />
            </div>
            <div className=''>
                <input type='text' 
                className='border-2 border-black w-full absolute bottom-0 h-[50px] font-normal bg-[#6A7280] rounded-md text-white'  
                placeholder='Comment here'
                name='comments'
                value={formData.comments}
                onChange={ChangeHandler} />
                <RiSendPlane2Fill className='absolute bottom-3 right-2 text-[20px] font-extrabold cursor-pointer' 
                    onClick={clickHandler}
                />
            </div>
        </div>
        <div>
            <BsFillChatTextFill className='font-bold text-[30px] mx-auto mt-10 cursor-pointer' />
            <BsQuestionSquareFill className='font-bold text-[30px] mx-auto mt-6 cursor-pointer' />
            <CgNotes className='font-bold text-[30px] mx-auto mt-6 cursor-pointer' />
        </div>
    </div>
  )
}

export default Videos