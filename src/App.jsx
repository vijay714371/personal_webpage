import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Expertice from './components/Expertice'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     <Banner/>
     <About/>
     <Services/>
     <Expertice/>
     <Footer/>
      
    </>
  )
}

export default App