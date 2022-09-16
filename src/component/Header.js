import React from 'react'
import './Header.css'
import logo from '../logo.svg';
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

    return (
        <div className='mainHeader'>
            <div className='headerImage'>
                <img src={logo} onClick={() => navigate('/')} />
            </div>
            <h2 className='headerTitle'>Click on Icon to navigate to Home Page</h2>
            <div className='headerButton'>
                <button onClick={() => alert("Button to Perform any Action")}>User</button>
            </div>
        </div>
    )
}

export default Header