import React from 'react'
import "./Nav1.css"

const Nav1 = () => {
    return (
        <div className='menu'>
        <div className='nav1'>
            <p>Watch a short interactive demo and live Q&A – Sign up now →</p>
        </div>
        <div className='nav-links'>
        <i className="fas fa-search"></i>
        <ul>
            <li> <a href="/contact">Contact</a> </li>
            <li> <a href="/sign_in">Sign in</a> </li>
        </ul>
        </div>
        </div>
    )
}

export default Nav1
