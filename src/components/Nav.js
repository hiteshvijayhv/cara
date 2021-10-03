import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <nav className='nav-links'>
            <Link className='link' to='/'>
                <div className='home-link'>CalmSounds</div>
            </Link>

            <Link className='link' to='/about'>
                <div className='link-text'>About</div>
            </Link>
        </nav>
    )
}

export default Nav
