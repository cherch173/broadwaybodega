import { useState, useRef, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Order from './pages/Order'
import Nav from './components/Nav'
import SocialNav from './components/SocialNav'
import Byo from './components/Byo'
import './App.css'

function App() {
  const getYear = () => {
    return new Date().getUTCFullYear()
  }
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <header>
          <Nav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/order" element={<Order />}/>
            <Route path="/byo" element={<Byo />}/>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
