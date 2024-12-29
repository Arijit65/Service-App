import React from 'react'
import Navbar from './Components/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Search from './Pages/Search';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/search' element={<Search/>}/>


      </Routes>
    </div>
  )
}

export default App