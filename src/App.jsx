import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store'
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';
import Countries from './features/countries/Countries';
import Comment from './features/comments/Comment';
function App() {
  return (
    <Provider store={store}>
      <div className='mybox'>
        <Comment></Comment>
        <Countries></Countries>
        <Counter></Counter>
        <Todolist></Todolist>
      </div>
    </Provider>
  );
}

export default App;
