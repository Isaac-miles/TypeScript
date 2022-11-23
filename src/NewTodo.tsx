import { useRef } from "react";

const NewTodo =()=>{
const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler =(event:React.FormEvent)=>{
    event.preventDefault();
    // const enteredTodo = inputRef.current?.value //the ? signifies a possible null value at firs
    const enteredTodo = inputRef.current!.value // the ! signifies to ts you are sure there will be a value at this point
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