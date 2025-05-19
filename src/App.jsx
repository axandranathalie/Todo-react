import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]); 
  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updated);
  };

  const deleteTodo = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  const activeTodos = todos.filter((todo) => !todo.done);
  const completedTodos = todos.filter((todo) => todo.done);

  return (
    <div className="todo-container">
      <h1 className="headline">Griffeltavlan</h1>
      <button
        className="reset-button"
        onClick={() => {
          setTodos(todos.filter((todo) => !todo.done));
        }}
      >
        Ny dag
      </button>
      <p className="subtext">Vad ska du göra idag?</p>
      <TodoInput addTodo={addTodo} />

      <div className="todo-columns">
        <div className="todo-column">
          <h2 className="section-title">Att göra</h2>
          <TodoList
            todos={activeTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </div>

        <div className="todo-column">
          <h2 className="section-title">Färdig</h2>
          <TodoList
            todos={completedTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
