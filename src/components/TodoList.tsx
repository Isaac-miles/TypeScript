import React, { PropsWithChildren } from "react";

const TodoList:React.FC<PropsWithChildren<{text:string}>> = (props)=>{

  return <li>{props.text}</li>
    
}

export default TodoList;