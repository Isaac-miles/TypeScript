
class Fruit{
  constructor(fruitName:string){
    this.id = Math.floor(Math.random() * 100).toLocaleString()
    this.fruitName = fruitName
  }
  id:string
  fruitName: string
}

export default Fruit;