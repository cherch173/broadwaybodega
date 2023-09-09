import React from 'react'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const getYear = () => {
        return new Date().getUTCFullYear()
      }
      const [count, setCount] = useState(0)

      
    return (
        <div>
            <h1>Broadway Bagel & Deli</h1>
            <p>
                839 Broadway Brooklyn, NY 11206
                <br />
                PHONE: 718-490-5534
            </p>
            <a href="/orders" target="_blank">
                {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
            </a>
            <br />
            <a href="/orders" target="_blank">
                <img src="public/bodega_sando.png" className="logo sando" alt="React logo" />
                <br />
                <br />
                <figcaption>click me to enter</figcaption>
            </a>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    {count} likes
                </button>
            </div>
        </div>
    )
}

export default Home
