import React from 'react'
import {NavLink} from  'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <nav className="bg-gray-200 shadow w-full px-8">
      <div className="container mx-auto flex items-center justify-between h-16">
        <div className="text-indigo-500">
         {/* <img src={assets.np_logo} alt="Logo" className="h-8 w-8 mr-2"/> */}
         <h2 > <a href="/">ADMIN PANEL</a></h2>
        </div>
        <div className="text-gray-500">
          <ul className="flex items-center gap-5 font-medium">
            {/* <NavLink to='/' className="md:px-4 md:py-2 hover:text-indigo-400">Home</NavLink> */}
            <NavLink to='/add-service' className="md:px-4 md:py-2 hover:text-indigo-400">ADD SERVICE</NavLink>
            <NavLink to='/add-user' className="md:px-4 md:py-2 hover:text-indigo-400">ADD USER</NavLink>
            <NavLink to='/service-list' className="md:px-4 md:py-2 hover:text-indigo-400">SERVICE LIST</NavLink>
            <NavLink to='/user-list' className="md:px-4 md:py-2 hover:text-indigo-400">USER LIST</NavLink>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar