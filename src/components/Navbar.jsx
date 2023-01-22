import React, { useState } from 'react'
import Shirts from "./Shirts"
import Pants from "./Pants"
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

const Navbar = () => {

  return (
    <>
    <Router>
    <div
    className=" bg-[#DE972F] flex justify-between items-center h-16 w-full mx-auto px-4">
        <h1
        className='w-full text-4xl font-bold text-[#DE402F] hover:transition duration-300 delay-75 hover:text-[#f8503e] animate-bounce hover:ease-linear cursor-pointer'>
        <div href='/index.html' className='drop-shadow-lg'>
          Digby
        </div>
        </h1>
        <ul className='md:flex text-[#DE402F]'>
            <Link to="/Shirts" className='p-4 font-bold'>Shirts</Link>
            <Link to="/Pants" className='p-4 font-bold'>Pants</Link>

            <Routes>
              <Route path="Shirts" element={<Shirts />} />
              <Route path="Pants" element={<Pants />} />
            </Routes>
        </ul>
    </div>
    </Router>
    </>
  )
}

export default Navbar