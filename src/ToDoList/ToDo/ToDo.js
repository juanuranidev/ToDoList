import React from 'react';

const ToDo = ({toDo, completed, text, id, toDos, setToDos}) => {
    
    const handleComplete = () => {
        setToDos(toDos.map(item => {
            if(item.id===toDo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }

    const handleDelete = () => {
        setToDos(toDos.filter(x => x.id !== toDo.id))
    }

    return (
      <tr id={id} className={completed===false?'incomplete' :'completed'}>
          <td>{text}</td>
          <td><button onClick={handleComplete}><span className='fas fa-check'/></button></td>
          <td><button onClick={handleDelete}><span className='fas fa-times'/></button></td>
      </tr>
    ) 
  
  
};

export default ToDo;