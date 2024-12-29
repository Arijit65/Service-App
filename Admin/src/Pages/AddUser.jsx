import React, { useState } from 'react'
import axios from 'axios'
const AddUser = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
   

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    // Handle login logic here, e.g., send a request to a backend server
    try {
      const response= await axios.post('http://localhost:4000/sign-up',{
     name,
     email,
     password},{
      headers:{
        'content-type':'application/json'
      }
     });


      //setAToken(response.data.token);
     // localStorage.setItem('atoken',response.data.token);
      setName('')
      setEmail('')
      setPassword('')
     
      console.log(response.data.token);
    } catch (error) {
      console.error(error);
      
    }
  };





  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="bg-white p-10 rounded-lg shadow-md w-96">
      <h2 className="text-2xl font-bold mb-6">ADD AN USER</h2>
      <form onSubmit={handleSubmitSignup}>
        <div className="mb-4">
        <label  className="block text-gray-700 text-sm font-bold mb-2">
            User Name
          </label>
          <input
            type="text"
            id="user"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="User Name"
          />
          <label  className=" mt-4 block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
            ADD USER
          </button>
        </div>
        
       
       
      </form>
    </div>
  </div>
  )
}

export default AddUser