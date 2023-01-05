import { createContext, FC, PropsWithChildren, useState } from "react";
import Fruit from "../model/model";

type contentType = {
  items: Fruit[];
  addFruit: (fruit: string) => void;
  removeFruit: (id: string) => void;
};
export const FruitContext = createContext<contentType>({
  items: [],
  addFruit: () => {},
  removeFruit: () => {},
});

const FruitContextProvider: FC<PropsWithChildren> = (props) => {
  const [fruits, setFruits] = useState<Fruit[]>([]);

  const addFruit = (enteredFruit:string) => {
    const newFruit = new Fruit(enteredFruit);
    //lets search for existing fruit with same name
      const existingFruit = fruits.find((fruit)=>fruit.fruitName === newFruit.fruitName)
      if(existingFruit){
        alert(`${existingFruit.fruitName} Already Exists`)
        return
      }
     setFruits((prev)=> prev.concat(newFruit))

  };
  const removeFruit = (id:string) => {
    setFruits((prev)=>prev.filter(fr=>fr.id !== id))
  };

  const value = {
    items: fruits,
    addFruit,
    removeFruit,
  };
  return (
    <FruitContext.Provider value={value}>
      {props.children}
    </FruitContext.Provider>
  );
};

export default FruitContextProvider;
