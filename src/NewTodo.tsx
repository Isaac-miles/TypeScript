import { useRef } from "react";

const NewTodo =()=>{
const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler =(event:React.FormEvent)=>{
    event.preventDefault();

  }

 return( 
 <form onSubmit={submitHandler}>

  <label htmlFor="text">Todo Item</label>
  <input type='text' id="text" ref={inputRef}/>
  <button>Add Todo</button>

 </form>

 );
}

export default NewTodo;