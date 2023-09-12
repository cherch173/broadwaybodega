import React from 'react'
import { Link } from 'react-router-dom'
import { useParams, useState } from 'react-router-dom'

const Cart = (props) => {
    return (
        <div>
            <h1 className="headerText">Your Cart</h1>
            <div className="card">
                <h3 className="subheaderText">Order Details</h3>
                <p>BYO Sandwich Hero --- $9.99 </p>
                <p>Topo Chico Mineragua 12oz --- $1.99 </p>
                <p>Zapp's Chips Voodoo Heat  --- $1.99 </p>
                <p>Golden Oreos (8ct) --- $1.99 </p>
                <p>Bounty Paper Towels --- $2.99 </p>
                <br />
                <br />
                <p>
                    <i>Sub-Total</i> --- $18.95
                </p>
                <p>
                    <i>Sales Tax</i> --- $1.89
                </p>
                <p>
                    <strong>TOTAL --- $20.84</strong>
                </p>
            </div>
            <br />
            <Link to="/byo">
                <button>edit order</button>
            </Link>
            <Link to="/test">
                <button>continue to payment</button>
            </Link>
        </div>
    )
}

export default Cart
