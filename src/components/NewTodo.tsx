import { PropsWithChildren, useRef } from "react";
import classes from "./NewTodo.module.css";
// const extraProps ={
//   onAddTodo:()=>void
// }

const NewTodo: React.FC< PropsWithChildren<{ onAddTodo: (text: string) => void }>> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // const enteredTodo = inputRef.current?.value //the ? signifies a possible null value at firs
    const enteredTodo = inputRef.current!.value; // the ! signifies to ts you are sure there will be a value at this point

    if (enteredTodo.trim().length === 0) return; //or throw custom errors

    props.onAddTodo(enteredTodo);
  };

  return (
    <form onSubmit={submitHandler} className= {classes.form}>
      <label htmlFor="text">Todo Item</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
