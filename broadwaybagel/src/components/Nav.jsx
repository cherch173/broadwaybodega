import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import SocialNav from './SocialNav'

const Nav = () => {
    return (
        <div className="nav">
            <nav>
                <ul>
                    <Link to="/">home </Link>
                    <Link to="/order">order online </Link>
                    <Link to="/contact">contact </Link>
                    <Link to="/test">sandbox </Link>
                </ul>
                <br />
                <SocialNav />
            </nav>
        </div>
    )
}

export default Nav
