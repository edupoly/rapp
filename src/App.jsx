import './App.css';
import React from 'react';
function App() {

  var [c,setC] = React.useState(0);

  var [myname,setMyname]=React.useState("Praveen");

  var [flag,setFlag] = React.useState(true);

  var [ students,setStudents ] = React.useState(["ravi","nani","sai"])
  function inc(){
    setC(c+1)
  }
  function addStudent(){
    var p = document.getElementById("d1").value;

    students.push(p)
  }
  return (
    <div className="myredbox">
      <input type="text" id="d1"/>
      <button onClick={addStudent}>Add Student</button>
      <ul>
        {
          students.map((s)=>{
            return <li>{s}</li>
          })
        }
      </ul>
      <h1>{flag}</h1>
      <h1>{myname}</h1>
      <h1>{c}</h1>

      <button onClick={inc}>Increment</button>
      &nbsp;&nbsp;&nbsp;
      <button>Decrement</button>
    </div>
  );
}

export default App;
