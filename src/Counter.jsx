import React from 'react'

function Counter() {

    React.useEffect(()=>{
      console.log("Counter Component useEffect with no DA called")
    })
   
    return (
      <div className='redbox'>
        <h1>CHILD Component</h1>
      </div>
    )
}

export default Counter;