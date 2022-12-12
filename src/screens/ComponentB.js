import React from 'react'

const ComponentB = (data) => {

  return (
    <div style={{display:'flex', flexDirection:'column', gap:'1.5rem'}}>
        <h3>Component B</h3>
        <input value={data?.name} readOnly placeholder='Name'/>
        <input value={data?.email} readOnly placeholder='Email'/>
    </div>
  )
}

export default ComponentB