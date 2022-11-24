import { PropsWithChildren } from "react";
import Todo from "../models/todo";
import TodoList from "./TodoList";

import classes from './Todos.module.css'

 const Todos:React.FC<PropsWithChildren<{items:Todo[]}> > =(props)=>{

  return ( 
  <ul className={classes.todos}>
    {props.items.map(item =>(
      <TodoList key={item.id} text={item.text}/>
    ))}
  </ul>
  )
}

export default Todos;