import React from 'react';
import Products from './Products'
import Countries from './Countries';
function App() {
  return (
    <div className='redbox'>
      <h4>App Component</h4>
      <div style={{display:'flex'}}>
        <Products></Products>
        <Countries></Countries>
      </div>
    </div>
  );
}

export default App;
