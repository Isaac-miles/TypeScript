import {FormEvent, useContext,useRef } from "react"
import { FruitContext } from "../store/todo-context"
import classes from './NewFruit.module.css'

const NewTodo =()=>{
const ctx = useContext(FruitContext);
const inputRef = useRef<HTMLInputElement>(null);

const submitHandler =(event:FormEvent)=>{
  event.preventDefault();

  const enteredFruit = inputRef.current!.value;
  if(enteredFruit.trim().length===0)return
  ctx.addFruit(enteredFruit);
}

  return (
    <div className={classes.container }>
    <h3>Fruit Store</h3>
    <form className={classes.form} onSubmit= {submitHandler}>
      <label htmlFor="fruits">Enter Favorite Fruit</label>
      <input type='text' id="fruits" ref={inputRef}/>
      <button>Add</button>
    </form>
    </div>
  )
}

export default NewTodo