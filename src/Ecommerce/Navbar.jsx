import React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import User from '../Resource/User.png'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary" style={{ 'justifyContent': 'space-between' }}>
      <a className="navbar-brand" href="#" style={{ 'color': 'white', 'paddingLeft': "1rem" }}>Shopmandu</a>
      <div className='col-lg-2 navbar-right'>
        <a href="#" className="Home" style={{ 'textDecoration': 'none', 'color': 'white' }}>Home</a>
        <HiOutlineShoppingCart style={{ 'height': "30px" }} />
        <img
          src={User}
          className="rounded-circle z-depth-0"
          alt="User image"
          height="30"
        />
      </div>
    </nav>
  )
}
