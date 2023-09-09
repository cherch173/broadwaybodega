import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Nav = () => {
    return (
        <div className="nav">
            <nav>
                <ul>
                    <Link to="/">home </Link>
                    <Link to="/order">place an order </Link>
                    <Link to="/contact">contact </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
