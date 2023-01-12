import React from 'react'

const Navbar = () => {
  return (
    <div className=" bg-[#DE972F] flex justify-between items-center h-16 w-full mx-auto px-4">
        <h1 className='w-full text-4xl font-bold text-[#DE402F] hover:transition duration-300 delay-75 hover:text-[#f8503e] animate-bounce hover:ease-linear cursor-pointer'><a href='/index.html'>Digby</a></h1>
        <ul className='md:flex text-[#DE402F]'>
            <a href='' className='p-4 font-bold'>Shirts</a>
            <a href='' className='p-4 font-bold'>Pants</a>
            <a href='' className='p-4 font-bold'>Logout</a>
        </ul>
    </div>
  )
}

export default Navbar