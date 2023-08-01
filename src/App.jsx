import React from 'react';
import {Outlet,Link} from 'react-router-dom'
function App() {
  return (
    <div>
      <h1>App Component</h1>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">Aboutus</Link></li>
        <li><Link to="/contact">Contactus</Link></li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  );
}

export default App;
