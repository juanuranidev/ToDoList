import React from 'react';
import './_ToDo.scss';

const ToDo = ({toDo, completed, text, toDos, setToDos}) => {
    
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
      <div className={completed===false?'toDo incomplete' :'toDo completed'}>
          <p className='toDo_p'>{text}</p>
          <div className='toDo_div'>
            <button className='toDo_div_button' onClick={handleComplete}><span className='fas fa-check toDo_div_button_span'/></button>
            <button className='toDo_div_button' onClick={handleDelete}><span className='fas fa-times toDo_div_button_span'/></button>
          </div>
      </div>
    )
};

export default ToDo;