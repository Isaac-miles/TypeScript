import { PropsWithChildren, useContext } from "react";
import TodoList from "./TodoList";
import { TodoContext } from "../store/todos-context";

import classes from './Todos.module.css'

 const Todos:React.FC = ()=>{
    const ctx = useContext(TodoContext);
    
  return ( 
  <ul className={classes.todos}>
    {ctx.items.map(item =>(
      <TodoList key={item.id} text={item.text} removeTodo= {ctx.removeTodo.bind(null, item.id)}/>
    ))}
  </ul>
  )
}

export default Todos;