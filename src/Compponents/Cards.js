import React from 'react'
import Card from "./Card"

const Cards = (props) => {
    let courses = props.courses;

    
    let Category = props.category;
    
    function getCourses(){
        if(Category === "All"){
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{
            return courses[Category];
        }
    }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getCourses().map( (course) =>  (
                <Card key={course.id} course={course}/>
            ))
        }
    </div>
  )
}

export default Cards