import { useRef, useContext } from "react";
import Todo from "../models/todo";
import { TodoContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";
// const extraProps ={
//   onAddTodo:()=>void
// }

const NewTodo: React.FC= () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const ctx = useContext(TodoContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // const enteredTodo = inputRef.current?.value //the ? signifies a possible null value at firs
    const enteredTodo = inputRef.current!.value; // the ! signifies to ts you are sure there will be a value at this point

    if (enteredTodo.trim().length === 0) return; //or throw custom errors

    ctx.onAddTodo(enteredTodo);
  };

  return (
    <form onSubmit={submitHandler} className= {classes.form}>
      <label htmlFor="text">Daily Workout List</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Workout</button>
    </form>
  );
};

export default NewTodo;
