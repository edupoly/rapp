import React from 'react';

function Counter(props){
  console.log("Props::",props)
  const [counter, setCounter] = React.useState(props.i);

  function inc(){
    setCounter(counter+props.v)
  }
  function dec(){
    setCounter(counter-props.v)
  }

  return(
    <div className={props.c}>
      <h1>Count:{counter}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>

      <button onClick={()=>{props.abc(counter)}}>Say HI To Parent</button>
    </div>
  )
}

export default Counter;