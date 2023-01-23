import { useState } from 'react'
import Home from "./components/Home";
import Pants from "./components/Pants";
import Shirts from "./components/Shirts";

import { BrowserRouter as Router,
  Routes,
  Route,
  Link} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="shirt" element={<Shirts />} />
        <Route path="pants" element={<Pants />} />
      </Routes>
    </>
  )
}

export default App
