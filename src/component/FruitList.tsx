import { FC, PropsWithChildren, useContext } from "react"
import classes from './FruitList.module.css'

const FruitList:FC<PropsWithChildren<{fruitName:string, remove:()=>void}>> =(props)=>{
  return <li className={classes.list} onClick={props.remove}>{props.fruitName}</li>
}

export default FruitList