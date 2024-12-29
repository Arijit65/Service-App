import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  
  const [state,setState]=useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AppContext);
 // const [atoken,setAToken]=useState('');
  const navigate = useNavigate();

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
      setState('login');
      
      console.log(response.data.token);
    } catch (error) {
      console.error(error);
      
    }
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/login',{
        email,
        password
      },{
        headers:{
          //'Authorization': `Bearer ${atoken}`,
          'content-type':'application/json'
        }
      })
      console.log('login succesfull',response.data)
      login()
      navigate('/')
   
    } catch (error) {
      console.error('Error logging in:', error);

      
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">{state==='login'?'Login':'Sign Up'}</h2>
        <form onSubmit={state==='signup'? handleSubmitSignup : handleSubmitLogin}>
          <div className="mb-4">
            <div className={`${state==='login' ? 'hidden':null}`}>
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
          </div>
         
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
              {state==='login'?'Login':'Sign Up'}
            </button>
          </div>
          {state==='login'? <p>dont have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('signup')}>click here</span></p>: <p>Have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('login')}>Login here</span></p>}
         
         
        </form>
      </div>
    </div>
  );
}

export default Login;

