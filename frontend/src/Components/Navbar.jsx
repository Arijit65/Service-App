import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {

  const { authState, logout } = useContext(AppContext);
  const navigate = useNavigate();
  const [menu, setMenu] = useState('home')



  return (
    <div>

      <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
        <div className="md:h-16 h-8 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">

          <div className="text-indigo-500 md:order-1">
            <img src={assets.np_logo} alt="" className="h-8 w-8 mr-2" />
          </div>
          <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
            <ul className="md:flex items-start gap-5 font-medium">
              <NavLink to='/' onClick={() => setMenu('home')}>
                <li className={`md:px-4 md:py-2 hover:text-indigo-400 ${menu === 'home' ? 'border-b-2 border-red-700' : ''}`}>
                  Home
                </li>
              </NavLink>
              <NavLink to='/search' onClick={() => setMenu('search')}>
                <li className={`md:px-4 md:py-2 hover:text-indigo-400 ${menu === 'search' ? 'border-b-2 border-red-700' : ''}`}>
                  Search
                </li>
              </NavLink>
              <NavLink to='/about' onClick={() => setMenu('about')}>
                <li className={`md:px-4 md:py-2 hover:text-indigo-400 ${menu === 'about' ? 'border-b-2 border-red-700' : ''}`}>
                  About
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="order-2 md:order-3">
            {authState === false ? <button onClick={() => { navigate('/login') }} className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
              <span>Login</span>
            </button> : <button onClick={() => logout()} className="px-4 py-2 bg-indigo-200 hover:bg-indigo-300 text-gray-50 rounded-xl flex items-center gap-2">  <span>Logout</span> </button>}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;

