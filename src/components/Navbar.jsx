import React from 'react'
import { Link } from 'react-router-dom';
import '../css_files/navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
    
    <Link to ='/'> <h2>Home</h2>
    </Link>
      <Link to='/newpost'>
      <h2>New Post</h2>
      </Link>
     


       
    </div>
  )
}

export default Navbar;