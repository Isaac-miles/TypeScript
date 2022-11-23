import Todos from './components/Todos';
import Todo from './models/todo';
import './App.css';

function App() {
  const todo = [new Todo('Typescript'), new Todo('Javascript')]
  console.log(todo);
  
  return (
    <div >
     <Todos items={['Jan', 'Feb', 'Mar']}/>
    </div>
  );
}

export default App;
