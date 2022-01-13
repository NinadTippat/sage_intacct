import React from 'react'
import "./Banner.css"
import Bounce from 'react-reveal/Bounce';

const Banner = () => {
    return (
        <div className='page'>
        <div className='banner'>
        <Bounce left cascade>
            <div className="left">
                <h1>The Leader in Accounting and Financial Management Software</h1>
                <p>Whether you're a growing startup or an established public company, we're the right partner for your long-term success.</p>
                <button className='btn1'>
                Watch demo
                </button>
            </div>
            </Bounce>
            <Bounce right cascade>
            <div className="right">
                <img src="banner_right.jpg" alt="" />
            </div>
            </Bounce>
        </div>
        </div>
    )
}

export default Banner
