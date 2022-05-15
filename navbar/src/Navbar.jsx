import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

    const onSoundEffect = () => {
        const audio = new Audio()
        audio.src = require('./components/assets/Mouse-Click-00-c-FesliyanStudios.com.mp3')
        audio.play()
    }
        

  return (
        <nav style={{"height":"80px"}} className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a  className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <NavLink onClick={onSoundEffect } to='/' style={{"textDecoration":"none"}} activestyle={"active"}>
                    <li className="nav-item mx-3">
                    <a className="nav-link" >Home</a>
                    </li>
                    </NavLink>
                    <NavLink onClick={onSoundEffect } to='/about' style={{"textDecoration":"none"}} activestyle={"active"} >
                    <li className="nav-item mx-3">
                    <a className="nav-link" >About</a>
                    </li>
                    </NavLink>
                    <NavLink onClick={onSoundEffect } to='/portfolio' style={{"textDecoration":"none"}} activestyle={"active"}>
                    <li className="nav-item mx-3">
                    <a className="nav-link" >Portfolio</a>
                    </li>
                    </NavLink>
                    
                    <NavLink onClick={onSoundEffect } to= '/contact' style={{"textDecoration":"none"}} activestyle={"active"}>
                    <li className="nav-item mx-3">
                    <a className="nav-link" >Contact</a>
                    </li>
                    </NavLink>
                    
                </ul>
                </div>
            </div>
        </nav>
  )
}

export default Navbar