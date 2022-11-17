import logo from './logo.svg';
import './App.css';
import Formulaire from './components/formulaire/formulaire';
import { nanoid } from "nanoid"
import { useState } from 'react';

function App() {

  // Liste de tâche avec un élément au démarrage de l'app
  const [tasks, setTasks] = useState([{
    id: 1,
    name: "Faire la vaisselle",
    description: "",
    priority: "moyenne",
    isDone: true
  }]) // [{...}] => [{...}, newTask]

  const addTask = (name, description, priority) => { // "Faire les courses", "", "urgente"
    const newTask = {
      id: nanoid(),
      name: name,
      description: description,
      priority: priority,
      isDone: false
    }

    setTasks(currentValue => [newTask, ...currentValue]) // => [{...}] => [{...}, newTask]
  }

  return (
    <div className="App">
      <Formulaire onSubmit={addTask}/>
    </div>
  );
}

export default App;
