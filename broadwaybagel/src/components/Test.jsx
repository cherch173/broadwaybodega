import React from 'react'
import axios from 'axios'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Test = () => {

  const [menu, setMenu] = useState('')

  const getMenu = async () => {
    try {
      const res = await axios.get(`https://sandbox.dev.clover.com/v3/merchants/PE3YVG7423SQ1`)
      setMenu(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMenu()
  }, [])


  return (
    <div>
      <h1>Clover API Testing Grounds</h1>
      <br />
      <p>{menu.name !== '' && menu.name}</p>
      <br />
            <br />
            <Link to="/">
                <button>back</button>
            </Link>
    </div>
  )
}

export default Test
