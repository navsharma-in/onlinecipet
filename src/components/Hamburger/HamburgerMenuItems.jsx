import React from 'react'

const HamburgerMenuItems = ({ isOpen, onClose }) => {
  return (
    <ul className={isOpen ? 'menu show' : 'menu'}>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li onClick={onClose}><a href="#">Close</a></li>
    </ul>
  )
}

export default NavItems