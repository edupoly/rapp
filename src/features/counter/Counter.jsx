import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './counterSlice'
function Counter() {
    var {count} = useSelector((state)=>{return state.counter})
    var dispatch = useDispatch();

    console.log(count)
  return (
    <div className='mybox'>
        <h1>Counter:{count}</h1>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </div>
  )
}

export default Counter