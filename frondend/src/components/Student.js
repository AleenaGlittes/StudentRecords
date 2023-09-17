import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

function Student() {
    const [show, setShow] = useState(null);
    const [student, setStudent] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/students")
            .then(res => setStudent(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            });
    
            if (result.isConfirmed) {
                
                await axios.delete(`http://localhost:8000/students/remove/${id}`);
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
                window.location.reload();
            }
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <>
            <div className="w-3/4 sm:px-3 ">
                <div className="px-5 md:px-8 py-2 md:py-4 bg-gray-100 rounded-tl-lg mt-20 ml-32 rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Student List</p>
                        <div>

                            <button className="inline-flex sm:ml-3 mt-4  sm:mt-0 items-start justify-start px-2 py-3 bg-green-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <Link to="/students/create">
                                    <p className="text-sm font-medium leading-none text-white">Add Student</p>
                                </Link></button>

                        </div>
                    </div>
                </div>
                <div className="bg-white shadow px-4 md:px-2 pt-4 md:pt-7 pb-5  ml-32 overflow-y-auto">
                    <table className="w-2/4 whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full  text-base leading-none text-gray-800">
                                <th className="font-semibold    text-left pl-12">First Name</th>
                                <th className="font-semibold  text-left pl-12">Last Name</th>
                                <th className="font-semibold  text-left pl-20">Age</th>
                                {/* <th className="font-semibold  text-left pl-32">Actions</th> */}


                            </tr>
                        </thead>
                        <tbody className="w-full">
                            {student.map((data, i) => (
                                <tr key={i} className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                                    <td className="pl-12">
                                        <p className="text-sm font-normal leading-none text-gray-800">{data.First_Name}</p>

                                    </td>
                                    <td className="pl-12">
                                        <p className="font-normal">{data.Last_Name}</p>

                                    </td>
                                    <td className="pl-20">
                                        <p className="font-normal">{data.Age}</p>

                                    </td>
                                    <td className="pl-20">

                                        <Link to={`/students/update/${data.id}`}>
                                            <div className="flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-blue-500 hover:bg-indigo-600  hover:text-white focus:outline-none rounded">

                                                <p>Edit</p>
                                            </div>

                                        </Link>


                                
                                    </td>
                                    <td>
                                    <div onClick={(e) => handleDelete(data.id)} className=" sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-red-200 hover:text-white hover:bg-red-600 focus:outline-none rounded">
                                            <p>Delete</p>
                                        </div>

                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    );
}

export default Student;
