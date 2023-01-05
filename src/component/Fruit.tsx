import { FC, useContext } from "react";
import { FruitContext } from "../store/todo-context";
import FruitList from "./FruitList";
import classes from './Fruit.module.css'

const  Fruit:FC= ()=>{
  const ctx = useContext(FruitContext);

  return (
    <div className={classes.fruit}>
      {ctx.items.map((fruit)=>(<FruitList key={fruit.id} fruitName={fruit.fruitName} remove ={ctx.removeFruit.bind(null,fruit.id)}/>))}
    </div>
  )
 
}

export default Fruit