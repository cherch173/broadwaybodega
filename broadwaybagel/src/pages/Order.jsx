import React from 'react'
import { Link } from 'react-router-dom'

const Order = () => {
    return (
        <div>
            <h1 className="headerText">Order Online</h1>
            <br />
            <br />
            <div className="card">
                    <figure>
                        <Link to="/byo">
                            <img className="menuImage" src="/bodega_sando.png" alt="sando" />
                            <figcaption>deli sandwiches</figcaption>
                        </Link>
                    </figure>
                    <figure>
                        <Link to="/byo">
                            <img className="drinksImage" src="/topo.png" alt="sando" />
                            <figcaption>drinks</figcaption>
                        </Link>
                    </figure>
                    <figure>
                        <Link to="/byo">
                            <img className="drinksImage" src="/zapps.png" alt="sando" />
                            <figcaption>chips</figcaption>
                        </Link>
                    </figure>
                    <figure>
                        <Link to="/byo">
                            <img className="drinksImage" src="/bagel.png" alt="sando" />
                            <figcaption>bagels</figcaption>
                        </Link>
                    </figure>
            </div>
            <br />
            <br />
            <Link to="/">
                <button>back</button>
            </Link>
        </div>
    )
}

export default Order
