import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import AddService from './Pages/AddService';
import AddUser from './Pages/AddUser';
import ServiceList from './Pages/ServiceList';
import UserList from './Pages/UserList';
import Home from './Pages/Home';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-service" element={<AddService/>}/>
        <Route path="/add-user" element={<AddUser/>}/>
        <Route path="/service-list" element={<ServiceList/>}/>
        <Route path="/user-list" element={<UserList/>}/>
      </Routes>

    </div>
  )
}

export default App;