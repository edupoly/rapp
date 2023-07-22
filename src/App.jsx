import React, { useCallback, useEffect } from 'react';
import Counter from './Counter';

function App() {
  const [a, seta] = React.useState(123)
  var ob1 = {firstname:'ravi'};
  React.useEffect(()=>{
    console.log("App Component useEffect with Empty DA called")
  },[])
  React.useEffect(()=>{
    console.log("App Component useEffect with no DA called")
  })
  function chg(){
    seta(a*23*Math.random())
  }
  var fun1 = useCallback(function(){
    console.log("Hello")
  },[])
  
  var ar = React.useMemo(()=>{
    return [12,23]
  },[])
  return (
    <div className='mybox'>
      <button onClick={chg}>change a</button>
      <h1>App Component : {a}</h1>
      <Counter ar={ar}></Counter>
    </div>
  );
}

export default App;
