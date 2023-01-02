import React from 'react'
import './dropdown.css'

const Dropdown = ({open}) => {
  return (
   <>
    <div className="dropdown">
        <div className="d-content">
            <a href="">Link 1</a>
            <a href="">Link 2</a>
            <a href="">Link 3</a>
            <a href="">Link 4</a>
        </div>
    </div>
   </>
  )
}

export default Dropdown