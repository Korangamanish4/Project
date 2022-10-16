import React from 'react'
import './Header.css'
import logo from '../logo.svg';
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

    return (
        <div className='mainHeader'>
                <img alt='' src={logo} onClick={() => navigate('/')} />
                <h2 >Click Icon for Home</h2>
                <button onClick={() => alert("Button to Perform any Action")}>User</button>
        </div>
    )
}

export default Header