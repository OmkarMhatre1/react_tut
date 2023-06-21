import React, { useEffect } from "react";


const Home=()=>{

    useEffect (()=>{
        document.title = "Home || React Project"
    }, []);

    return (
        <div className="text-center">
           
                <h1 >First React Project</h1>
                <p >
                    This is first Project of react js with Spring Boot.
                </p>
                <button >Click Here</button>
           
        </div>
    );
};

export default Home;    