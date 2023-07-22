import React from 'react'
import Second from './Second'

function First(props) {
    console.log(props)
  return (
    <div  style={{border:'3px solid black',padding:'10px',margin:'10px'}}>
        <h1>First Comp:{props.children}</h1>
        <Second></Second>
    </div>
  )
}

export default First