import React, { PropsWithChildren } from "react";

import classes from './TodoList.module.css'

const TodoList:React.FC<PropsWithChildren<{text:string}>> = (props)=>{

  return <li className={classes.list}>{props.text}</li>
    
}

export default TodoList;