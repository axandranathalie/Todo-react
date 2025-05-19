import { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState(''); 

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <div className="todo-input">
      <div className="input-wrapper">
        <input
        className="input" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="" 
        />
        <button className="add-button" onClick={handleAdd}>+</button>
      </div>
    </div>
  );
}

export default TodoInput;