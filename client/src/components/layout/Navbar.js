import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => { 
  return ( 
    <nav className='navbar bg-dark'>
        <h1>
            <Link to='/'><i className='fas fa-book-reader'></i>HRED</Link>
        </h1>
        <ul>
            <li><a href='/register'>Register</a></li>
            <li><a href='/login'>login</a></li>
        </ul>
    </nav>
  )
}

export default Navbar;