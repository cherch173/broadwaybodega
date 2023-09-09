import React from 'react'
import {Link} from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <h1 className="headerText">Contact Us</h1>
            <br />
            <h3>Munchies, Bagels & More</h3>
            <p>
                839 Broadway Brooklyn, NY 11206
            </p>
            <p>
                PHONE: <a href="tel:+1718-490-5534">718-490-5534</a>
            </p>
            <p>
                EMAIL: <a href="mailto:sky9king@gmail.com">broadywaybagelsanddeli@gmail.com</a>
            </p>
            <br />
            <br />
            <Link to="/">
                <button>back</button>
            </Link>
            <br />
            <br />
        </div>
    )
}

export default Contact
