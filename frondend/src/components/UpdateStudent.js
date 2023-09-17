import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateStudent() {
    const [firstname,setFirstName]= useState("");
    const [lastname,setLastName]=useState("");
    const [age,setAge]=useState("");
    const {id} =useParams();
    const [sidebar, setsidebar] = useState();
    const navigate =useNavigate()


    function handlesubmit(e){
        e.preventDefault();
        axios.put(`http://localhost:8000/students/update/${id}`,{firstname,lastname,age})
        .then(res =>{
            console.log(res);
            navigate('/');
        }).catch(err =>console.log(err));
    }
    return (
        <div className="h-full w-full py-16 px-4 pb-4">
            <div className="flex flex-col items-center justify-center">
                
                
                <div className="bg-blue-200 shadow bg-blue-400 rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-12">
                <p tabIndex={0} role="heading" aria-label="Login to your account"  className="text-2xl font-extrabold  leading-6 text-gray-800">
                      Update your account
                    </p>
                 
                    <div>
                        <lable className="text-sm font-medium leading-none text-gray-800 pt-4">First Name</lable>
                        <input 
                        aria-label="enter first Name" 
                        role="input"
                        type="text" 
                        placeholder="Enter First Name" 
                        value={firstname}
                        required
                        onChange={e=>setFirstName(e.target.value)}
                        className=" border rounded focus:outline-none text-xs font-medium leading-none text-white-800 py-3 w-full pl-3 mt-2" />
                    </div>
                    <div>
                        <lable className="text-sm font-medium leading-none text-gray-800">Last Name</lable>
                        <input 
                        aria-label="enter Last name" 
                        role="input" 
                        type="text" 
                        value={lastname}
                        required
                        placeholder="Enter Last Name" 
                        onChange={e=>setLastName(e.target.value)}
                        className=" border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </div>
                    <div>
                        <lable className="text-sm font-medium leading-none text-gray-800">Age</lable>
                        <input 
                        aria-label="enter age"
                        role="input"
                        type="text"  
                        required
                        placeholder="Enter age"
                        value={age}
                        onChange={e=>{setAge(e.target.value)}}
                        className=" border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </div>
                    
                    <div className="mt-8">
                        <button onClick={handlesubmit} role="button" aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                         Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateStudent;
