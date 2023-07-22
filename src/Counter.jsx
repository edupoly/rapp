import React from 'react'

function Counter() {

    console.log("Counter component 1st line");

    const [x, setx] = React.useState(100);
    const [y, sety] = React.useState(200);
    const [count, setCount] = React.useState(0);

    function inc(){
        setCount(count+1)
    }
    function dec(){
        setCount(count-1)
    }

    React.useEffect(()=>{
      console.log("Mehaboob")
    },[x,count])

    React.useEffect(()=>{
      console.log("Manikanta")
    },[y])

    React.useEffect(()=>{
      console.log("Counter Component useEffect with no DA called")
    })
    React.useEffect(()=>{
      console.log("Counter Component useEffect with Empty DA called")
    },[])
    return (
      <div className='mybox'>

          <h1>Counter:{count}</h1>
          <button onClick={inc}>Increment</button>
          <button onClick={dec}>Decrement</button>
      </div>
    )
}

export default React.memo(Counter)