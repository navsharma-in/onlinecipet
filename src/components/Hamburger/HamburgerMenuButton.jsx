import React from 'react'

const HamburgerMenuButton = ({onClick}) => {
  return (
    <button onClick={onClick} className="menu-button"><i className="fas fa-bars"></i></button>
  )
}

export default HamburgerMenuButton