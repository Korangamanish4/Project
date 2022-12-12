import React from 'react'
import './Header.css'
import logo from '../logo.svg';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

    return (
        <div >
        <div className='mainHeader'>
                <img  alt='' src={logo} onClick={() => navigate('/')} />
                <h2 >Click Icon for Home</h2>
                <button onClick={() => alert("Button to Perform any Action")}>User</button>
        </div>
        <div className='links'>
         <Link to='/about'>About</Link>
         <Link to='/test'>Portfolio</Link>
        </div>
        </div>
    )
}

export default Header