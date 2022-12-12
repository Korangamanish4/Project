import React, { useState } from 'react'
import './Component.css'
import Page1 from './Page1'
import Page2 from './Page2'

const ComponentB = () => {

    const [activePage, setActivePage] = useState('page1')

  return (
    <div className='containerB'>
        <nav className='navB'>
            <button  className={`sub_menu_links${
                  activePage === 'page1'
                    ? "_active"
                    : ""
                }`} onClick={() => setActivePage('page1')}>Proactive Analysis</button>
            <button  className={`sub_menu_links${
                   activePage === 'page2'
                    ? "_active"
                    : ""
                }`} onClick={() => setActivePage('page2')}>Self-Serve Analysis</button>
        </nav>
        <div className='contentB'>
         {activePage === 'page1' ? <Page1 /> : <Page2 />}
        </div>
        </div>
  )
}

export default ComponentB