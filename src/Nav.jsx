import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div>
       <Link to="/">Home</Link>
       <Link to="/Product">Product</Link>
       <Link to="/About">About</Link>
    </div>
  )
}

export default Nav
