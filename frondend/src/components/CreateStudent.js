import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateStudent() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [age, setAge] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post("http://localhost:8000/students/create", { firstname, lastname, age })
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => console.log(err));
    }


    function handleCancel() {
        
        setFirstName("");
        setLastName("");
        setAge("");
    }
    return (
        <div className="h-full w-full py-16 px-4 pb-4">
            <div className="flex flex-col items-center justify-center">
                <div className="shadow bg-gradient-to-tl from-blue-500 to-indigo-300 rounded lg:w-1/3 md:w-1/2 w-full p-10 pb-4 mt-8">
                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                        Create your account
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="text-sm font-medium mt-4 leading-none text-gray-800 pt-4">First Name</label>
                            <input
                                aria-label="enter first Name"
                                role="input"
                                type="text"
                                required
                                placeholder="Enter First Name"
                                value={firstname}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="border rounded focus:outline-none text-xs font-medium leading-none text-white-800 py-3 w-full pl-3 mt-2"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium leading-none text-gray-800">Last Name</label>
                            <input
                                aria-label="enter Last name"
                                role="input"
                                type="text"
                                required
                                placeholder="Enter Last Name"
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                                className="border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium leading-none text-gray-800">Age</label>
                            <input
                                aria-label="enter age"
                                role="input"
                                type="text"
                                required
                                pattern="[0-9]+" 
                                placeholder="Enter age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                            />
                        </div>
                       

                        <div className="mt-8">
                            <button type="submit" role="button" aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-green-400 border rounded hover:bg-green-600 py-4 w-2/4">
                                Create Student
                            </button>
                            <button type="button" onClick={handleCancel} aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:ring-red-700 text-sm font-semibold leading-none text-white focus:outline-none bg-red-400 border rounded hover:bg-red-300 py-4 w-2/4 pl-3">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateStudent;
