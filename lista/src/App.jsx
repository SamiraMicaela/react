import { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, { text: todoText, completed: false }]);
      setTodoText('');
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleEditTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  return (
    <div className='Container'>
      <h1 className='title'>React To-Do List</h1>
      <div className='todo-container'>
        <input
          className='todo-input'
          type='text'
          placeholder='Agregar nueva tarea'
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className='add-button' onClick={handleAddTodo}>
          Agregar
        </button>
        <ul className='todo-list'>
          {todos.map((todo, index) => (
            <li
              className={todo.completed ? 'completed todo-item' : 'todo-item'}
              key={index}
              onClick={() => handleToggleComplete(index)}
            >
              {todo.completed ? (
                <del>{todo.text}</del>
              ) : (
                <span>{todo.text}</span>
              )}
              <span
                className='edit-button'
                onClick={(e) => {
                  e.stopPropagation();
                  const newText = prompt('Editar tarea:', todo.text);
                  if (newText !== null) {
                    handleEditTodo(index, newText);
                  }
                }}
              >
                ✎
              </span>
              <span
                className='remove-button'
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveTodo(index);
                }}
              >
                ❌
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;