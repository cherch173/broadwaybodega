import React from 'react'
import axios from 'axios'
import { components } from 'react-select'
import { useState, useEffect, useRef } from 'react'
import Client from '../services/api'
import { Link, useNavigate } from 'react-router-dom'

const Byo = (props) => {

    const initialState = {
        bread: '',
        meat: '',
        cheese: '',
        topping1: '',
        topping2: '',
        condiment1: '',
        condiment2: '',
        notes: ''
    }

    const [sando, setSando] = useState(initialState)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await Client.post('/byo', sando)
        setSando(initialState)
        navigate('/test')
    }

    const handleChange = (e) => {
        setSando({...sando, [e.target.id]: e.target.value})
    }


    return (
        <div>
            <h1 className="headerText">Build Your Own Sandwich</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <label htmlFor="bread">Bread</label>
                <select className="dropdown" id="bread" value={sando.bread} onChange={handleChange}>
                    <option value="Roll">Roll</option>
                    <option value="Hero">Hero</option>
                    <option value="Wrap">Wrap</option>
                    <option value="Spinach Wrap">Spinach Wrap</option>
                    <option value="Everything Bagel">Everything Bagel</option>
                    <option value="Egg Everything Bagel">Egg Everything Bagel</option>
                    <option value="Plain Bagel">Plain Bagel</option>
                    <option value="Whole Wheat Bagel">Whole Wheat Bagel</option>
                    <option value="PoppyseedBagel">Poppyseed Bagel</option>
                    <option value="Garlic Bagel">Garlic Bagel</option>
                    <option value="Onion Bagel">Onion Bagel</option>
                </select>
                <label htmlFor="meat">Meat (by Boar's Head) </label>
                <select default="Cracked Pepper Turkey" className="dropdown" id="meat" value={sando.meat} onChange={handleChange}>
                    <option value="Ovengold Turkey">Ovengold Turkey</option>
                    <option value="Honey Turkey">Honey Turkey</option>
                    <option value="Cracked Pepper Turkey">Cracked Pepper Turkey</option>
                    <option value="Smoked Ham">Smoked Ham</option>
                    <option value="Turkey Ham">Turkey Ham</option>
                    <option value="Bacon">Bacon</option>
                    <option value="Turkey Bacon">Turkey Bacon</option>
                    <option value="Sausage">Sausage</option>
                    <option value="Impossible Sausage">Impossible Sausage</option>
                    <option value="Firesmith Roast Chicken">Firesmith Roast Chicken</option>
                    <option value="Firesmith Roast Chicken">Buffalo Chicken (sliced)</option>
                    <option value="Chicken Cutlet">Chicken Cutlet</option>
                    <option value="Grilled Chicken">Grilled Chicken</option>
                    <option value="Red Pastrami">Red Pastrami</option>
                    <option value="Romanian Pastrami">Romanian Pastrami</option>
                    <option value="Roast Beef">Roast Beef</option>
                    <option value="Genoa Pastrami">Genoa Salami</option>
                    <option value="Hard Salami">Hard Salami</option>
                </select>
                <label htmlFor="cheese">Cheese (by Boar's Head) </label>
                <select name="cheese" default="Mozzarella" className="dropdown" id="cheese" value={sando.cheese} onChange={handleChange}>
                    <option value="Mozzarella">Mozzarella</option>
                    <option value="Swiss">Swiss</option>
                    <option value="Sharp Cheddar">Sharp Cheddar</option>
                    <option value="Provolone">Provolone</option>
                    <option value="Muenster">Muenster</option>
                    <option value="Pepperjack">Pepperjack</option>
                    <option value="Cojita">Cojita</option>
                    <option value="Oaxaca">Oaxaca</option>
                    <option value="American">American</option>
                    <option value="Parmasean">Parmasean</option>
                    <option value="Brie">Brie</option>
                </select>
                <label htmlFor="topping1">Topping #1</label>
                <select name="topping1" className="dropdown" id="topping1" onChange={handleChange}>
                    <option value="Full Stack (Lettuce, Tomatoes, Pickles)">Full Stack (Lettuce, Tomatoes, Pickles)</option>
                    <option value="Health Stack (Spinach, Tomatoes, Pickles)">Health Stack (Spinach, Tomatoes, Pickles)</option>
                    <option value="Half Stack (Spinach, Pickles)">Half Stack (Spinach, Pickles)</option>
                    <option value="Lettuce">Lettuce</option>
                    <option value="Tomatoes">Tomatoes</option>
                    <option value="Dill Pickles">Dill Pickles</option>
                    <option value="Sliced Onion">Sliced Onion</option>
                    <option value="Grilled Onion">Grilled Onion</option>
                    <option value="Avocado">Avocado</option>
                    <option value="Spinach">Spinach</option>
                    <option value="Mushrooms">Mushrooms</option>
                    <option value="Pepperoncini">Pepperoncini</option>
                    <option value="Grilled Bell Peppers">Grilled Bell Peppers</option>
                    <option value="No Topping">No Topping</option>
                </select>
                <label htmlFor="topping2">Topping #2</label>
                <select name="topping2" className="dropdown" id="topping2" onChange={handleChange}>
                    <option value="Full Stack (Lettuce, Tomatoes, Pickles)">Full Stack (Lettuce, Tomatoes, Pickles)</option>
                    <option value="Health Stack (Spinach, Tomatoes, Pickles)">Health Stack (Spinach, Tomatoes, Pickles)</option>
                    <option value="Half Stack (Spinach, Pickles)">Half Stack (Spinach, Pickles)</option>
                    <option value="Lettuce">Lettuce</option>
                    <option value="Tomatoes">Tomatoes</option>
                    <option value="Dill Pickles">Dill Pickles</option>
                    <option value="Sliced Onion">Sliced Onion</option>
                    <option value="Grilled Onion">Grilled Onion</option>
                    <option value="Avocado">Avocado</option>
                    <option value="Spinach">Spinach</option>
                    <option value="Mushrooms">Mushrooms</option>
                    <option value="Pepperoncini">Pepperoncini</option>
                    <option value="Grilled Bell Peppers">Grilled Bell Peppers</option>
                    <option value="No Topping">No Topping</option>
                </select>
                <label htmlFor="condiment1">Condiment #1</label>
                <select name="condiment1" className="dropdown" id="condiment1" value={sando.condiment1} onChange={handleChange}>
                    <option value="Light Mayonnaise">Light Mayonnaise</option>
                    <option value="Mayonnaise">Mayonnaise</option>
                    <option value="Deli Mustard">Deli Mustard</option>
                    <option value="Yellow Mustard">Yellow Mustard</option>
                    <option value="Chipotle Mayonnaise">Chipotle Mayonnaise</option>
                    <option value="Tapatio">Tapatío</option>
                    <option value="Cholula">Cholula</option>
                    <option value="Valentino">Valentino</option>
                    <option value="Ketchup">Ketchup</option>
                    <option value="Jerk Sauce">Jerk Sauce</option>
                    <option value="Olive Oil">Olive Oil</option>
                </select>
                <label htmlFor="condiment2">Condiment #2</label>
                <select name="condiment2" className="dropdown" id="condiment2" value={sando.condiment2} onChange={handleChange}>
                    <option value="Yellow Mustard">Yellow Mustard</option>
                    <option value="Deli Mustard">Deli Mustard</option>
                    <option value="Mayonnaise">Mayonnaise</option>
                    <option value="Light Mayonnaise">Light Mayonnaise</option>
                    <option value="Chipotle Mayonnaise">Chipotle Mayonnaise</option>
                    <option value="Tapatio">Tapatío</option>
                    <option value="Cholula">Cholula</option>
                    <option value="Valentino">Valentino</option>
                    <option value="Ketchup">Ketchup</option>
                    <option value="Jerk Sauce">Jerk Sauce</option>
                    <option value="Olive Oil">Olive Oil</option>
                </select>
                <label htmlFor="notes">Notes for Order</label>
                <textarea
                    value={sando.notes}
                    onChange={handleChange}
                    className="notes" 
                    name="notes" 
                    id="notes" 
                    cols="36" 
                    rows="8"></textarea>
                <br />
                <button className="button" type="submit">submit</button>
            </form>
            <br />
            <br />
            <Link to="/">
                <button>back</button>
            </Link>
        </div>
    )
}

export default Byo
