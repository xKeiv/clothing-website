import React from 'react'
import tshirt from '../assets/KOSZULA_MEN.jpg';

const Card = ({ data }) => {

  return (

    <div className='border border-gray-500 max-w-[256px] p-1 ,m-2 bg-gray-200'>
      <img src={tshirt} alt="koszulka" className="border border-gray-700 rounded-sm" />
        <div className="flex flex-col text-center">
          <h1 className='font-bold'>{data.title}</h1>
          <h2 className='text-sm text-opacity-40'>{data.brand}</h2>
          <h2 className='text-2xl'>{data.price} ZŁ</h2>
          <button
          className='cursor-pointer bg-[#DE402F] text-white text-xl border m-2 p-2 border-red-900 rounded-sm w-[234px] h-12'>Dodaj Do Koszyka</button>
      </div>
    </div>
  )
}

export default Card