import React from 'react';
import Counter from './Counter';
import Todolist from './Todolist';
import store from './store/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <div className='mybox'>
        <h1>App Component</h1>
        <Counter></Counter>
        <Todolist></Todolist>
      </div>
    </Provider>
  );
}

export default App;
