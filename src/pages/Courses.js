
import React from 'react'
import {useState,useEffect} from "react";
import {apiUrl,filterData} from "../data";
import {toast} from "react-toastify";
import Spinner from "../Compponents/Spinner";
import Filter from "../Compponents/Filter";
import Cards from "../Compponents/Cards";

function Courses() {
  const [category,setCategory] = useState(filterData[0].title)
    const [courses,setCourses] = useState(null);
    const [loading,setLoading] = useState(true);
    async function fetching(){
        setLoading(true);
        try{
            let response = await fetch(apiUrl);
            let output = await response.json();
            setCourses(output.data);
        }
        catch(error){
            toast.error("something went wrong")
        }
        setLoading(false);
        }
        useEffect(() => {
        fetching();
        },[])

  return (
    <div className="flex flex-col min-h-screen bg-black">
      
      <div><Filter filterData = {filterData} category={category} setCategory={setCategory} /></div>
      <div className="flex w-11/12 max-w-[1200px] min-h-[50vh] mx-auto justify-center items-center flex-wrap  ">
        {
          loading ? (<Spinner/>) : (<Cards category={category} courses={courses}/>)
        }
      </div> 
        
    </div>
  )
}

export default Courses