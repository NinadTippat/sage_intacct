import React from 'react'
import "./Nav2.css"

const Nav2 = () => {
    return (
        <div className='nav2'>
            <img src="logo.jpg" alt="" />
            <ul>
                <li><a href="">Products</a></li>
                <li><a href="">Industries</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Partners</a> </li>
                <li><a href="">Resources</a> </li>
                <li><a href="">Company</a></li>
            </ul>
            <div className="burger">
            <i className="fas fa-search"/>
            <i class="fas fa-bars"/>
            </div>
            <button className='btn'>Get pricing</button>
        </div>
    )
}

export default Nav2
