import React from 'react'
import {Link} from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <h1 className="headerText">Contact Us</h1>
            <br />
            <h3 className="subheaderText">Munchies, Bagels & More</h3>
            <p>
                839 Broadway Brooklyn, NY 11206
            </p>
            <p>
                PHONE: <a href="tel:+1718-490-5534">718-490-5534</a>
            </p>
            <p>
                EMAIL: <a href="mailto:sky9king@gmail.com">munchiesbagelsandmore@gmail.com</a>
            </p>
            <br />
                <h3 className="subheaderText">Business Hours</h3>
                <label htmlFor="Sunday">Sunday:</label> 8:00am - 6:00pm
                <br />
                <label htmlFor="Monday">Monday:</label>8:00am - 6:00pm
                <br />
                <label htmlFor="Tuesday">Tuesday:</label>8:00am - 6:00pm
                <br />
                <label htmlFor="Wednesday">Wednesday:</label>8:00am - 6:00pm
                <br />
                <label htmlFor="Thursday">Thursday:</label>8:00am - 6:00pm
                <br />
                <label htmlFor="Friday">Friday:</label>8:00am - 8:00pm
                <br />
                <label htmlFor="Saturday">Saturday:</label>8:00am - 8:00pm
            <br />
            <br />
            <Link to="/">
                <button>back</button>
            </Link>
        </div>
    )
}

export default Contact
