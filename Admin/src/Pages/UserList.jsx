import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {

  const [data,setData] = useState([])
  const getData = async()=>{
    const response = await axios.get('http://localhost:4000/users')
    const users = response.data.map((user)=>({
        name : user.name,
        email : user.email
                                       
    }))
    setData(users)

  }

  const handleDelete = async(email) =>{
    try {
      const response = await axios.post('http://localhost:4000/users/delete',{email:email})
      console.log(response.data)
      getData()
      
    } catch (error) {
      console.log(error)
      
    }
    

  }

  useEffect(()=>{
    getData();
  },[])
   


  return (

    <div className="overflow-x-auto">
    <table className="min-w-full bg-white">
      <thead className="bg-gray-200 text-gray-600">
        <tr>
          <th className="py-2 px-4 text-left">Name</th>
          <th className="py-2 px-4 text-left">Email</th>
          <th className="py-2 px-4 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border-b">
            <td className="py-2 px-4">{item.name}</td>
            <td className="py-2 px-4">{item.email}</td>
            <td className="py-2 px-4 text-center">
              <button
                //onClick={() => onEdit(item)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mx-1"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.email)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mx-1"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};
  

export default UserList