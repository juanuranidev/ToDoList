import React from 'react';
import ToDo from './ToDo/ToDo';

const ToDoList = ({toDos, setToDos}) => {
  return (
    <table>
      <tbody>
          {toDos.map(toDo => <ToDo toDo={toDo} key={toDo.id} completed={toDo.completed} text={toDo.text} id={toDo.id} toDos={toDos} setToDos={setToDos} /> )}
      </tbody>
    </table>
  );
};

export default ToDoList;
