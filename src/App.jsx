import logo from './logo.svg';
import './App.css';
import React from 'react'
function App() {
  var [myname,setMyname] = React.useState("praveen")
  return (
    <div>
      {myname.length%2===0 && (<i>{myname}</i>)}
      {myname.length%2===1 && (<b>{myname}</b>)}
    </div>
  );
}

export default App;
