import { useState, useRef, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Order from './pages/Order'
import viteLogo from '/vite.svg'
import Nav from './components/Nav'
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
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
