import React from 'react';

const Form = ({toDos, setToDos, inputText, setInputText}) => {

    const handleInputText = (e) => {
        setInputText(e.target.value)
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        setToDos([...toDos, {text: inputText, completed: false, id: Math.floor(Math.random() * 1000000)}])
        setInputText('')
      }

  return (
    <div>
        <form>
            <input type='text' value={inputText} onChange={handleInputText} ></input>
            {inputText
            ? <button type='submit' onClick={handleSubmit}><span className='fas fa-plus'/></button>
            : <button disabled><span className='fas fa-plus'/></button>} 
        </form>
    </div>
  );
};

export default Form;
