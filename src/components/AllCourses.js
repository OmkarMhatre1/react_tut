import React, { useState } from "react";
import Course from "./Course";


const AllCourse=()=>{

    const [courses, setCourses] = useState([
        
            {title:"Django Course",description:"Testing"},
            {title:"Java Course",description:"Testing"},
            {title:"React Js Course",description:"Testing"},       
    ]);


    return(
        
        <div>
            <h1 className="text-center">All Course</h1>
            <p className="text-center">List of courses are as follows</p>
            {

                courses.length>0? courses.map((item)=>(
                    <Course course={item}></Course>
                )): "No Courses available"
            }
        </div>

    );
};

export default AllCourse;