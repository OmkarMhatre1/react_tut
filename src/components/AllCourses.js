import React, { useState , useEffect } from "react";
import Course from "./Course";
import base_url from './../api/bootapi';
import axios from "axios";
import { toast } from "react-toastify";


const AllCourse=()=>{

    useEffect(()=> {
        document.title = "All Courses"
    }, []);

    //fuction to call server
    const getAllCoursesFromServer = () =>{
        axios.get(`${base_url}/products`).then(
            (Response)=>{
                //console.log(Response)  
                console.log(Response.data); 
                toast.success("courses has been loaded",{
                    position:toast.POSITION.BOTTOM_CENTER
                }); 
                setCourses(Response.data);
            },
            (Error)=>{
               // console.log(Error)
               toast.error("courses not loaded");
            }
        );
    };

    //calling server fuction
    useEffect(()=>{
        getAllCoursesFromServer();
    }, []);

    const [courses, setCourses] = useState([
        
            // {title:"Django Course",description:"Testing"},
            // {title:"Java Course",description:"Testing"},
            // {title:"React Js Course",description:"Testing"},       
    ]);


    return(
        
        <div>
            <h1 className="text-center">All Course</h1>
            <p className="text-center">List of courses are as follows</p>
            {

                courses.length>0? courses.map((item)=>(
                    <Course key={item.id} course={item}></Course>
                )): "No Courses available"
            }
        </div>

    );
};

export default AllCourse;