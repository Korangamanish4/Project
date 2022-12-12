import React from 'react'
import './Component.css'

const ComponentA = () => {
  return (
    <div className='containerA'>
    <h4>Highlights</h4>
    <section className='sectionA'>
      <div className='cardA'>
        <header>
        <h4>Recurring Issues</h4>
        <div className='selectA'>
        <select disabled>
          <option selected>LoB: Select</option>
        </select>
        </div>
        </header>
        <span>No data available</span>
      </div>
      <div className='cardA'>
        <header>
      <h4>Significant Failure Rate</h4>
      <div className='selectA'>
      <select disabled>
      <option selected>LoB: Select</option>
      </select>
      </div>
      </header>
      <span>No data available</span>
      </div>
      <div className='cardA'>
        <header>
      <h4>Significant Retest Rate</h4>
      <div className='selectA'>
      <select disabled>
      <option selected>LoB: Select</option>
      </select>
      </div>
      </header>
      <span>No data available</span>
      </div>
    </section>
    </div>
  )
}

export default ComponentA