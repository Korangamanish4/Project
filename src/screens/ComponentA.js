import React from 'react'

const ComponentA = (props) => {

  return (
    <div style={{display:'flex', flexDirection:'column', gap:'1.5rem'}}>
     <h3>Component A</h3>
     <input type='text' placeholder='Name' onChange={(e) => props.userName(e.target.value)}/>
     <input type='email' placeholder='Email' onChange={(e) => props.mail(e.target.value)}/>
    </div>
  )
}

export default ComponentA