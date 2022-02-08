import React from 'react';
import './_Form.scss';

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
      <div className='form'>
          <form className='form_form'>
              <input autoFocus className='form_form_input' type='text' value={inputText} onChange={handleInputText} ></input>
              {inputText
              ? <button className='form_form_button' type='submit' onClick={handleSubmit}><span className='fas fa-plus form_form_button_span'/></button>
              : <button className='form_form_button' disabled><span className='fas fa-plus form_form_button_span'/></button>} 
          </form>
      </div>
    );
};

export default Form;