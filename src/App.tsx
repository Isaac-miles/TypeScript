import { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './NewTodo';
import './App.css';

function App() {

const [todo, setTodo] = useState<Todo[]>([])

  const onAddTodo =(enteredTodo:string)=>{
    const newTodo = new Todo(enteredTodo);

    setTodo((prevTodo)=>{
      return prevTodo.concat(newTodo);
    })
  }

  console.log(todo);
  
  return (
    <div >
      <NewTodo onAddTodo={onAddTodo}/>
     <Todos items={todo}/>
    </div>
  );
}

export default App;
