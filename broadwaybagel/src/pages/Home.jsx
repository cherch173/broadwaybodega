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
            <h1>Munchies, Bagels & More</h1>
            <p>
                839 Broadway Brooklyn, NY 11206
                <br />
                PHONE: 718-490-5534
            </p>
            <a href="/orders" target="_blank">
                {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
            </a>
            <br />
            <a href="/order">
                <img src="/bodega_sando.png" className="logo sando" alt="React logo" />
                <br />
                <br />
                <figcaption>click here to enter</figcaption>
            </a>
            <br />
            <br />
            <div className="likebutton">
                <button onClick={() => setCount((count) => count + 1)}>
                    {count} likes
                </button>
            </div>
        </div>
    )
}

export default Home
