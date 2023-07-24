import React from 'react';
import Counter from './Counter';

function App() {
  const [a, seta] = React.useState(123)
  
  React.useEffect(()=>{
    console.log("App Component updated")
  })

  
  return (
    <div className='redbox' style={{border:"10px solid blue"}}>
      <button onClick={()=>{seta(a*20)}}>change a</button>
      <h1>App Component : {a}</h1>
      <Counter></Counter>
    </div>
  );
}

export default App;
