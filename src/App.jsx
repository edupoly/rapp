import React from 'react';
import {Outlet} from 'react-router-dom'
function App() {
  return (
    <div>
     <h1>This is App</h1>
     <a href="/contact">Click here to Contactus</a>
     &nbsp;&nbsp;&nbsp;
     <a href="/aboutus">Click here know me...</a>
     <Outlet />
    </div>
  );
}

export default App;
