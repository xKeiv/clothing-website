import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import { BrowserRouter as Router,
  Routes,
  Route,
  Link} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Carousel />
        <Hero />
        <Footer />
      </div>
    </>
  )
}

export default App
