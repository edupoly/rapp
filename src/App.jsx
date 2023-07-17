import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  var [myname,setMyname]=React.useState("sowjanya")
  return (
    <div>
      <h1 style={{color:'red'}}>Edupoly</h1>
      <h1 style={myname.length%2===0?{color:'blue'}:{color:'pink'}}>{myname}</h1>
    </div>
  );
}

export default App;
