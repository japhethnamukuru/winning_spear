import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>      
      <Navbar />
      <Hero />
      <HomeCards />
      <Footer />
    </>
  )
}

export default App
