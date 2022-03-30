import { useState } from 'react';
import './App.scss';
import TodoList from './components/dars2/common/Todolist/TodoList';
import Counter from './Counter';
import Modal from './components/dars2/Modal/Modal';
/* import Header from './components/dars1/Header/Header';
import Footer from './components/dars1/Footer/Footer'; */


function App() {

  console.log('sssssss')
  alert('asasdwwf')
  return (
    <div className="App">
        {/* <Counter/> */}
        <TodoList/>
        {/* <Modal setIsOpen={setOpen} isOpen={open}/> */}
        <h1>hello world</h1>
    </div>
  );
}



export default App;
