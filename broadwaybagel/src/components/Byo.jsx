import React from 'react'
import { components } from 'react-select'
import { useState, useEffect, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'

const Byo = () => {
    return (
        <div>
            <h1 className="headerText">Build Your Own Sandwich</h1>
            <br />
            <form action="#">
                <label htmlFor="bread">Bread</label>
                <select default="Roll" className="dropdown" id="bread">
                    <option value="Hero">Hero</option>
                    <option value="Roll">Roll</option>
                    <option value="Wrap">Wrap</option>
                </select>
                <br />
                <label htmlFor="meat">Meat (by Boar's Head) </label>
                <select default="Roll" className="dropdown" id="bread">
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
                <br />
                <label htmlFor="cheese">Cheese (by Boar's Head) </label>
                <select name="cheese" default="Mozzarella" className="dropdown" id="cheese">
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
                <br />
                <label htmlFor="Toppings">Toppings</label>
                <select name="toppings" className="dropdown" id="toppings" multiple>
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
                </select>
            </form>
            <br />
            <button className="button" type="submit">submit</button>
        </div>
    )
}

export default Byo
