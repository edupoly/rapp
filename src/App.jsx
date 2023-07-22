import React, { useEffect } from 'react';

function App() {

  var myref = React.useRef();
  var myref2 = React.useRef();

  useEffect(()=>{
    myref.current.focus();
  },[])
  function checkEnter(e){
    // console.log(e.key)
    if(e.key==='Enter'){
      myref2.current.focus()
    }
  }
  return (
    <div>
     <input type="text" ref={myref} onKeyUp={checkEnter}/>
     <br />
     <input type="text" ref={myref2}/>
    </div>
  );
}

export default App;
// hooks
// useState,useEffect,useCallback,useMemo,useRef,useContext