import React from 'react'
import ComponentA from '../component/Test/ComponentA'
import ComponentB from '../component/Test/ComponentB'
import './Test.css'

const Test = () => {
  return (
    <div className='content'>
        <ComponentA />
        <ComponentB />
    </div>
  )
}

export default Test