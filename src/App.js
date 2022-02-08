import {React, useState} from "react";
import Form from "./Form/Form";
import ToDoList from "./ToDoList/ToDoList";
import LocalStorage from "./LocalStorage";
import './_App.scss';
import './styles/_base.scss';

function App() {
  const [inputText, setInputText] = useState('')
  const [toDos, setToDos] = useState([])

  return (
    <main className='app'>
      <h1 className='app_h1'>Tareas Pendientes</h1>
      <Form toDos={toDos} setToDos={setToDos} inputText={inputText} setInputText={setInputText} />
      <ToDoList toDos={toDos} setToDos={setToDos} />
      <LocalStorage toDos={toDos} setToDos={setToDos} />
    </main>
  );
}

export default App;