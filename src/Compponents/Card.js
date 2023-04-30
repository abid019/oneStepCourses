import React from 'react';
import {FcLikePlaceholder,FcLike} from "react-icons/fc";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Card = (props) => {
    
    let course = props.course;
    const [liked,setLike] = useState(false)
    function likeHandler(event){
        event.preventDefault()
        if(liked){
            setLike(false);
            toast.warning("like removed")
        }
        else{
            setLike(true);
            toast.success("liked Successfully")
        }
    }
    const navigate = useNavigate();
    function clickHandler(){
       
        navigate("/videos")
    }
  return (
    <div className='bg-bgDark rounded-md bg-opacity-80 overflow-hidden w-[300px]' onClick={clickHandler}>
        <div className='relative'>
            <img src={course.image.url} alt=''></img>
            <div className='absolute rounded-full bg-white w-[40px] h-[40px] flex items-center justify-center  right-2 -bottom-5'>
                <button onClick={likeHandler}>
                    {
                        liked ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
                    }
                </button>
            </div>
        </div>

        <div className="p-4">
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='text-white mt-2'>{/*{`${course.description.substring(0,100)}...`}*/}
            {
                course.description.length > 100 ? (course.description.substring(0,100) + "...") : (course.description)
            }
            </p>
        </div>
        
        
    </div>
  )
}

export default Card