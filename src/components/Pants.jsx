import React from 'react'
import Navbar from "./Navbar"
import Card from "./Card"

const Pants = () => {
  return (
    <>
      <Navbar/>
      <div className="flex m-2 gap-4">
      <Card/>
      <Card/>
      <Card/>
      </div>
    </>
  )
}

export default Pants