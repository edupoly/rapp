import React from 'react';
import First from './First';
import MyContext from './MyContent';
function App() {
  const [x, setx] = React.useState(44)
  return (
    <MyContext.Provider value={x}>
      <div style={{border:'3px solid red',padding:'10px',margin:'10px'}}>
      <button onClick={()=>{setx(x+29)}}>Change X</button>
      <h1>App Component:{x}</h1>
        <First>{}</First>
      </div>
    </MyContext.Provider>
  );
}

export default App;
