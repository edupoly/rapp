import logo from './logo.svg';
import './App.css';
import React from 'react'
function App() {
  var [ar,setAr]= React.useState([10,47,54,22,45,98,43]);
  var [t,setT] = React.useState(0);
  function evens(){
    setT(0)
  }
  function odds(){
    setT(1)
  }
  return (
    <div>
      <button onClick={evens}>Evens</button>
      <button onClick={odds}>Odds</button>
      <ul>
        {
          ar.map((a)=>{
            if(a%2===t){
              return <li>{a}</li>
            }
          })
        }
      </ul>
    </div>
  );
}

export default App;
