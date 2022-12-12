import React, {useState} from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import './demo.css'

const Demo = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  

  return (
    <div className='container'>
     <ComponentA userName={(value) => setName(value)} mail={(value) => setEmail(value)}/>
     <ComponentB name={name} email={email}/>
    </div>
  )
}

export default Demo