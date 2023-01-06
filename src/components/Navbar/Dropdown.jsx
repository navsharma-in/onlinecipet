import React from 'react'
import { NavLink } from 'react-router-dom'
import './dropdown.css'

import TC from '../../Pages/tc';

const Dropdown = ({open}) => {
  return (
   <>
    <div className="dropdown">
        <div className="d-content">
            <NavLink to='/tc'>Transfer Certificate</NavLink>
            <a href="">Link 2</a>
            <a href="">Link 3</a>
            <a href="">Link 4</a>
        </div>
    </div>
   </>
  )
}

export default Dropdown