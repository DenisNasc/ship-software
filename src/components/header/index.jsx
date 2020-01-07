import React from 'react'
import './header.css'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <Link to='/' children='Home'/>
            <Link to='/about' children='About'/>
        </nav>
    )
}

export default Header