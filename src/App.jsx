import React from 'react';
import Counter from './Counter';
function App() {
  function abc(c){
    alert("HI "+c)
  }
  return (
    <div className='redbox'>
      <Counter v={10} i={100} c="greenbox" abc={abc}></Counter>
      <Counter v={20} i={200} c="bluebox" abc={abc}></Counter>
      <Counter v={15} i={50} c="redbox" abc={abc}></Counter>
    </div>
  );
}

export default App;
//reusability
//refactoring
//parent to child communication