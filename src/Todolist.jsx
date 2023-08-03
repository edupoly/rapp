import React,{useState} from 'react'
import { connect } from 'react-redux'
function Todolist(props) {
    console.log("props in todolist:",props)
    const [newtodo, setNewtodo] = useState('');
  return (
    <div className='mybox'>
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}}/>
        <button onClick={()=>{props.dispatch({type:'ADDTODO',payload:newtodo})}}>Add Todo</button>
        <ul>
            {
                props.todosR.todos.map((t)=>{
                    return <li>{t}</li>
                })
            }
        </ul>
        
    </div>
  )
}

export default connect(store=>store)(Todolist);