//import react
import { useState } from 'react'

//import styles
import './NavBar.css'

//import react router
import { NavLink } from 'react-router-dom'


const NavBar = () =>{

    return(
        <nav>
            <div className='navBar'>
            <ul className='navItems'>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/nosotros">Nosotros</NavLink></li>
            </ul>
            </div>
        </nav>
    );
}

export {NavBar}