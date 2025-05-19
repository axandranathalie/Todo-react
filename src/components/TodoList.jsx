function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li className={`todo-item ${todo.done ? "done" : ""}`} key={todo.id}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggle(todo.id)}
          />
          <span className="todo-text">{todo.text}</span>
          <button className="delete-button" onClick={() => onDelete(todo.id)}>
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
