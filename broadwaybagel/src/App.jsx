import { useState } from 'react'
import viteLogo from '/vite.svg'
import Nav from './components/Nav'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header>
          <Nav />
        </header>
        <h1>Broadway Bagel & Deli</h1>
        <p>
          839 Broadway Brooklyn, NY 11206
          <br />
          PHONE: 718-490-5534
        </p>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <br />
        <a href="https://react.dev" target="_blank">
          <img src="public/bodega_sando.png" className="logo sando" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
