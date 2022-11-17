import logo from './logo.svg';
import './App.css';
import Formulaire from './components/formulaire/formulaire';
import { nanoid } from "nanoid"
import { useState } from 'react';
import TaskList from './components/task-list/task-list';

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

  const deleteTask = (id) => { // id : l'id de la tâche qu'on veut supprimer
    // Je filtre ma liste de tâche : j'enlève la tâche qui a l'id passé en paramètre
    setTasks(currentValue => currentValue.filter(
      elem => elem.id !== id
    ))
  }

  const finishTask = (id) => { // id : l'id de la tâche qu'on veut finir
    // Je modifie chaque élément de ma liste tâche : 
    // Si l'élément a l'id passé en paramètre, je passe isDone à true
    // Sinon je ne change rien
    setTasks(
      currentValue => currentValue.map(
        elem => {
          if (elem.id === id) {
            return {
              ...elem,
              isDone: true
            }
          }
          return elem
        }
      )
    )
  }

  return (
    <div className="App">
      <Formulaire onSubmit={addTask}/>
      <TaskList tasks={tasks}
        onDeleteItem={deleteTask}
        onFinishItem={finishTask}/>
    </div>
  );
}

export default App;
