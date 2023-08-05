import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addTodo } from './todolistSlice';
function Todolist() {
    var {tasks} = useSelector((state)=>{return state.todos})
    const [newtask, setNewtask] = React.useState('');
    var dispatch = useDispatch();
    console.log(tasks)
  return (
    <div className='mybox'>
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setNewtask(e.target.value)}}/>
        <button onClick={()=>{dispatch(addTodo(newtask))}}>Add Todo</button>
        <ul>
            {
                tasks.map((t)=>{
                    return <li>{t}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Todolist