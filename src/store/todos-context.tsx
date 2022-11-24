import { type } from '@testing-library/user-event/dist/type'
import React, { PropsWithChildren, useState } from 'react'
import Todo from '../models/todo'



type contType ={
  items:Todo[];
  onAddTodo:(text:string)=> void;
  removeTodo:(id:string)=>void
}
export const TodoContext = React.createContext<contType>({
  items: [],
  onAddTodo:()=>{},
  removeTodo:(id:string)=>{}
})

const TodoContextProvider:React.FC<PropsWithChildren> =(props)=>{

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

  const contextValue:contType={
    items: todo,
    onAddTodo,
    removeTodo
  }
  return <TodoContext.Provider value={contextValue}>
        {props.children}
  </TodoContext.Provider>
}

export default TodoContextProvider