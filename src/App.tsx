import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import "./App.css";

function App() {
  const [todo, setTodo] = useState<Todo[]>([]);

  const onAddTodo = (enteredTodo: string) => {
    const newTodo = new Todo(enteredTodo);

    setTodo((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };
  const removeTodo =(id:string)=>{
    setTodo((prev)=>prev.filter(todo=> todo.id !== id))
  }
  return (
    <div>
      <NewTodo onAddTodo={onAddTodo} />
      <Todos items={todo}  removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
