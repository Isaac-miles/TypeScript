import React, { MouseEventHandler, PropsWithChildren } from "react";

import classes from './TodoList.module.css'

const TodoList:React.FC<PropsWithChildren<{text:string; removeTodo:()=>void}>> = (props)=>{

  return <li className={classes.list} onClick={props.removeTodo}>{props.text}</li>
    
}

export default TodoList;