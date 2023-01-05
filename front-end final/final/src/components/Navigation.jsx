import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='navbar'>
<div className="navleft col-lg-6 ">
    <Link to='/'>LOGO</Link>
</div>
<div className="navright">
<Link to='/'>Home</Link>
<Link to='/users'>Users</Link>
<Link to='/about'>About Us</Link>
<Link to='/admin'>Admin</Link>
</div>


    </div>
  )
}

export default Navigation