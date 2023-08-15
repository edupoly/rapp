import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store'
import Navbar from './features/navbar/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className='mybox'>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </Provider>
  );
}

export default App;
