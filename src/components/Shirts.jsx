import React from 'react'
import Navbar from "./Navbar"
import Card from "./Card"
import jsonData from "../../databases/shirts"


const Shirts = () => {

  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center m-2 gap-4">
    {jsonData.products.map((data, index) =>
            <Card key={index} data={data}></Card>
     )}
    </div>
    </>
  )
}

export default Shirts